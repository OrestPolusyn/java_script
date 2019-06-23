export const set = value => {
    localStorage.setItem("bookmark", JSON.stringify(value));
};

export const get = () => {
    const data = localStorage.getItem("bookmark");
    return data ? JSON.parse(data) : [];
};