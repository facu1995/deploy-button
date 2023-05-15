import React from 'react';
import style from '../styles/Button.module.css';

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
export const Button = ({
  type = 'primary',
  size = 'medium',
  label,
  hover = true,  
  borderRadius=30,
  ...props
}: ButtonProps) => {
  return (
    <button
      type="button"
      className={[`${style['storybook-button']}`,style[`storybook-button--${size}`],  style[`storybook-button--${type}`],hover && style[`storybook-button--${type}--hover`]].join(' ')}
      style={{borderRadius:borderRadius}}
      {...props}
    >
      {label}
      
    </button>
  );
};

