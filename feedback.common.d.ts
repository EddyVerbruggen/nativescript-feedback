import { Color } from "color";
export declare enum FeedbackPosition {
    Top = 0,
    Bottom = 1,
}
export declare enum FeedbackType {
    Success = 0,
    Error = 1,
    Warning = 2,
    Info = 3,
    Custom = 4,
}
export interface FeedbackShowOptions {
    title?: string;
    titleColor?: Color;
    message?: string;
    messageColor?: Color;
    duration?: number;
    type?: FeedbackType;
    position?: FeedbackPosition;
    backgroundColor?: Color;
    icon?: string;
    onTap?: Function;
}
export interface FeedbackHideOptions {
}
export interface FeedbackApi {
    show(options: FeedbackShowOptions): Promise<any>;
    hide(options?: FeedbackHideOptions): Promise<any>;
    success(options: FeedbackShowOptions): Promise<any>;
    warning(options: FeedbackShowOptions): Promise<any>;
    error(options: FeedbackShowOptions): Promise<any>;
    info(options: FeedbackShowOptions): Promise<any>;
}
export declare abstract class FeedbackCommon implements FeedbackApi {
    abstract show(options: FeedbackShowOptions): Promise<any>;
    abstract hide(options?: FeedbackHideOptions): Promise<any>;
    success(options: FeedbackShowOptions): Promise<any>;
    warning(options: FeedbackShowOptions): Promise<any>;
    error(options: FeedbackShowOptions): Promise<any>;
    info(options: FeedbackShowOptions): Promise<any>;
}
