export interface Task {
    id: number,
    title: string,
    description?: string | null,
    type?: Type,
    createDate: Date,
    lastUpdated?: Date | null,
    icon: string
};

type Type = 'complete' | 'dont' | 'progress';