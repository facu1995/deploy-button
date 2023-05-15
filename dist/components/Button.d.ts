/// <reference types="react" />
interface ButtonProps {
    /**
     * Seleccionar el estilo del boton
     */
    type?: 'primary' | 'secondary' | 'disabled';
    /**
     * Seleccione el tamaño de border-radius
     */
    borderRadius?: number;
    /**
   * Desea activar el hover
   */
    hover?: boolean;
    /**
     * Seleccion el tamaño que desea el boton
     */
    size?: 'small' | 'medium' | 'large';
    /**
     * Ingrese el texto del boton
     */
    label: string;
    /**
     * Contenido del onClick
     */
    onClick?: () => void;
}
/**
 * Primary UI component for user interaction
 */
export declare const Button: ({ type, size, label, hover, borderRadius, ...props }: ButtonProps) => JSX.Element;
export {};
