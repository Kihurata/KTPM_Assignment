export const SQL_LIST_ALL_CAR_MODEL = () => `
    SELECT id, line, segment, created_at, updated_at
    FROM car_catalog.car_model
    ORDER BY line;
`;

export const SQL_LIST_ALL_CAR_VARIANT = () => `
    SELECT *
    FROM car_catalog.car_variant
`;

export const SQL_LIST_ALL_MEDIA = () => `
    SELECT *
    FROM car_catalog.media
`;