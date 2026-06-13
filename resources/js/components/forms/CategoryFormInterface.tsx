export interface CategoryFormData {
    name: string;
    description: string;
}

export interface CategoryFormProps {
    initialData?: CategoryFormData;
    onSubmit: (data: CategoryFormData) => void;
    buttonLabel: string;
}
