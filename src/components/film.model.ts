export default interface Ifilm {
    "adult": boolean,
    "backdrop_path": string,
    "genre_ids": number[],
    "id": number,
    "original_language": string,
    "original_title": string,
    "overview": string,
    "popularity": number,
    "poster_path": string,
    "release_date": string,
    "title": string,
    "video": boolean,
    "vote_average": number,
    "vote_count": number,
}

export const CONSTS = [
    `Популярные по убыванию`,
    `Популярные по возрастанию`,
    `Рейтинг по убыванию`,
    `Рейтинг по возрастанию`,
]
export const years = [2023, 2022, 2021, 2020, 2019, 2018, 2017]