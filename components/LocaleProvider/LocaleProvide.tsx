import useTranslation from "next-translate/useTranslation";

export const LocaleProvder=({props})={
    let {t} = useTranslation();
    return (
        <div>
    {props.chilldren}
    </div>
    )

}