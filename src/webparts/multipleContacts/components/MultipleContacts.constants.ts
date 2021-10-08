import { IPersonaStyles, mergeStyles } from "office-ui-fabric-react";

export const stackItemCard = {
    root: {
        width: '50%',
        height: 'auto',
        padding: '15px'
    }
};

export const PersonaStyles: Partial<IPersonaStyles> = { root: { justifyContent: 'center', marginLeft: '115px', paddingTop: '20px' } };

export const iconClass = mergeStyles({
    color: '#a020f0',
    fontSize: 20,
    width: 32,
    margin: '0',
    cursor: 'pointer'
});

export const stackTokens = { childrenGap: 10 };
