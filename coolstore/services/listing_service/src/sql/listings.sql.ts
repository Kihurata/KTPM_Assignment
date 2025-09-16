export const SQL_LIST_ALL = (WHERE: string, ORDER_BY: string) => `
  SELECT
    l.id, l.brand, l.model_name, l.segment, l.year, l.color,
    l.price_cents, l.currency, l.status, l.is_hot,
    (SELECT url FROM listing_images i
      WHERE i.listing_id = l.id
      ORDER BY i.is_cover DESC, i.sort_order ASC
      LIMIT 1) AS cover_url
  FROM listings l
  ${WHERE}
  ${ORDER_BY};
`;