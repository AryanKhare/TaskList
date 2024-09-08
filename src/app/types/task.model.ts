export interface Task {
    id?: number,
    title: string,
    description?: string | null,
    type?: string | null,
    createDate?: Date,
    lastUpdated?: Date | null,
    icon: string,
    iconId: number
};