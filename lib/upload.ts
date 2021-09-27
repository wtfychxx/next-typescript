export function uploadFile(file: any){
    const formData = new FormData()

    formData.append('file', file)
    formData.append('upload_preset', 'ml_default');

    const config = { method: 'POST', body: formData }

    return config
}