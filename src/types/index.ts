import { ButtonHTMLAttributes, HTMLAttributes, ReactNode } from "react";

export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
};

export interface IContainerProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
};

export interface IUser {
  email: string;
  password: string;
  confirmPassword: string;
}