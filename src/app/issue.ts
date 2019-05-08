// use interface if you just need to type

export interface Issue {
    title: string;
    series: string;
    description: string;
    publisherString: string;
    publicationDate: string;
    thumbnail: ImagesEntityOrThumbnail;
    images?: (ImagesEntityOrThumbnail)[] | null;
}

export interface ImagesEntityOrThumbnail {
    path: string;
    extension: string;
}