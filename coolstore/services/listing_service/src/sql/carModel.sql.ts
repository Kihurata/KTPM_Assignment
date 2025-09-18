export const SQL_LIST_ALL_CAR_MODEL = () => `
    SELECT 
    cm.id,
    cm.line,
    m.url,
    m.alt
    FROM car_catalog.car_model cm
    LEFT JOIN LATERAL (
        SELECT url, alt
        FROM car_catalog.media m
        WHERE m.model_id = cm.id
        AND m.is_primary = true
        ORDER BY m.sort_order ASC
        LIMIT 1
    ) m ON true
    ORDER BY cm.line;

`;

export const SQL_LIST_ALL_CAR_VARIANT = () => `
    SELECT *
    FROM car_catalog.car_variant
`;

export const SQL_LIST_ALL_MEDIA = () => `
    SELECT *
    FROM car_catalog.media
`;
