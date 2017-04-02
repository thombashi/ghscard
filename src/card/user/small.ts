import {UiSize} from "../../types";
import {AbstractUserCardGerator} from "./base_user";


export class SmallUserCardGerator extends AbstractUserCardGerator {
    protected get headerSize(): UiSize {
        return "small";
    }

    protected get infoSize(): UiSize {
        return "small";
    }

    protected get popupSize(): UiSize {
        return "small";
    }

    protected get avatarColumnWide(): string {
        return "eight";
    }
}
