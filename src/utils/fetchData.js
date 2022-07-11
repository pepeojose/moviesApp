import question from "/images/question.png";

export const getData = async (path) => {
    const API = import.meta.env.VITE_API;
    const TOKEN = import.meta.env.VITE_TOKEN;

    try {
        const res = await fetch(API + path, {
            headers: {
                Authorization: "Bearer " + TOKEN,
                "Content-Type": "application/json;charset=utf-8",
            },
        });

        const data = await res.json();
        return data;
    } catch (err) {
        console.log("Información no encontrada");
    }
};

export function getMovieImage(path, width) {
    return path ? `https://image.tmdb.org/t/p/w${width}${path}` : question;
}
