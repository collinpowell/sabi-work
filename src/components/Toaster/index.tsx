import {
    Toast,
    ToastClose,
    ToastDescription,
    ToastProvider,
    ToastTitle,
    ToastViewport,
} from "@/components/Toast"
import { useToast } from "@/components/useToast"

export function Toaster() {
    const { toasts } = useToast()

    return (
        <ToastProvider>
            {toasts.map(function ({ id, title, description, action, ...props }) {
                return (
                    <Toast key={id} {...props} style={{height:'83px'}}>
                        <div className="flex gap-1">
                            <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M42.6668 26.6666L28.8971 39.1846C28.3885 39.6469 27.6118 39.6469 27.1033 39.1846L21.3335 33.9393M58.6668 31.9999C58.6668 46.7275 46.7278 58.6666 32.0002 58.6666C17.2726 58.6666 5.3335 46.7275 5.3335 31.9999C5.3335 17.2723 17.2726 5.33325 32.0002 5.33325C46.7278 5.33325 58.6668 17.2723 58.6668 31.9999Z" stroke="#252627" stroke-width="4" stroke-linecap="round" />
                            </svg>
                            {description && (
                                <ToastDescription className="my-auto">{description}</ToastDescription>
                            )}
                        </div>
                        {action}
                        <ToastClose />
                    </Toast>
                )
            })}
            <ToastViewport />
        </ToastProvider>
    )
}