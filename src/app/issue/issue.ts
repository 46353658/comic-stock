// Using interface instead of class as per code-review-1
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