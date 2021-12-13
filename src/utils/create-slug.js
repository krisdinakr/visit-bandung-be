const createSlug = (title) => `${title.toLowerCase().replace(/\s/gm, '-')}`;

export default createSlug;
