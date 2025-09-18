// src/features/upload/uploadListingImagePublic.ts
import { supabase } from '../../lib/supabase';

const BUCKET = import.meta.env.VITE_BUCKET ?? 'car-images';

function makeObjectKey(listingId: string, file: File) {
  const safe = file.name.replace(/\s+/g, '-').toLowerCase();
  return `listings/${listingId}/${crypto.randomUUID()}-${safe}`;
}

export async function uploadListingImagePublic(opts: {
  listingId: string;
  file: File;
  sort_order?: number;
}) {
  const { listingId, file, sort_order = 0 } = opts;

  // 1) Upload lên Supabase
  const key = makeObjectKey(listingId, file);
  const { error } = await supabase.storage
    .from(BUCKET)
    .upload(key, file, { upsert: false, contentType: file.type });
  if (error) throw error;

  // 2) Lấy public URL
  const { data: pub } = supabase.storage.from(BUCKET).getPublicUrl(key);
  const publicUrl = pub.publicUrl;

  // 3) Gọi BE để UPSERT cover (điểm cần thêm)
  // 3.1 Nếu bạn đã cấu hình Vite proxy /api => dùng đường dẫn tương đối:
  const api = `/api`; 
  // 3.2 Nếu bạn dùng env base URL (như Home.tsx):
  // const api = import.meta.env.VITE_API_URL;

  const res = await fetch(`${api}/listings/${listingId}/images/cover`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ url: publicUrl, sort_order })
  });
  if (!res.ok) throw new Error(`PUT cover failed: ${await res.text()}`);

  return { url: publicUrl, key };
}
