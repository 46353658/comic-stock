export class Issue {
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