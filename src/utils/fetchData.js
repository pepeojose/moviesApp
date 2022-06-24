import question from "../../public/images/question.png";

export const getData = async (path) => {
    const API = "https://api.themoviedb.org/3";

    try {
        const res = await fetch(API + path, {
            headers: {
                Authorization:
                    "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NzUzN2ZmMTlmMzgxZGQ3YjY3ZWVlMWVhOGI4MTY0YSIsInN1YiI6IjVlM2ExNmU1MGMyNzEwMDAxODc1NTI4MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.nOpZ_nBtA93tbzr6-rxD0760tssAAaSppyjRv9anArs",
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
