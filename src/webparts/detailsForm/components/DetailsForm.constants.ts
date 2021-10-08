export const headerSubPivot = {
    root: {
        color: '#FFFFFF',
    },
    text: {
        fontSize: '14px'
    },
    link: {
        backgroundColor: '#D3D3D3',
        width: '293px',
        marginRight: '10px',
        ':hover': {
            color: '#FFFFFF',
            fontWieght: '600 !important',
            backgroundColor: '#A020F0'
        },
        ':active': {
            color: '#FFFFFF',
            fontWieght: '600 !important',
            backgroundColor: '#A020F0'
        }
    },
    linkIsSelected: {
        color: '#FFFFFF',
        fontWieght: '600 !important',
        backgroundColor: '#A020F0',
        marginRight: '10px',
        width: '293px',
        ':hover': {
            color: '#FFFFFF',
            fontWieght: '600 !important',
            backgroundColor: '#A020F0'
        },
        ':active': {
            color: '#FFFFFF',
            fontWieght: '600 !important',
            backgroundColor: '#A020F0'
        },
        '::before': {
            backgroundColor: '#A020F0',
            left: 0,
            right: 0
        },
    },
};

export const buttonPrimary: any = {root: {marginRight: '8px',backgroundColor: '#A020F0', fontWieght: '600 !important', border: '0px', height: '44px'}};
export const buttonDefault: any = {root: {fontWieght: '600 !important', height: '44px'}};

export const stackItemCardOne = {
    root: {
        width: '50%',
        border: '1px solid #D3D3D3',
        boxSizing: 'border-box',
        backgroundColor: '#FFFFFF',
        color: '#000',
        height: 'auto',
        padding: '15px'
    }
};
export const stackItemCardTwo = {
    root: {
        width: '50%',
        boxSizing: 'border-box',
        backgroundColor: '#FFFFFF',
        height: 'auto'
    }
};

export const dropDownStyles = {
    title: {
       borderColor: '#e1dfdd',
       backgroundColor: '#faf9f8',
       borderRadius: '5px',
       fontWeight: '400'
    }
};

export const textFieldStyles = {
    fieldGroup : {
        borderColor: '#e1dfdd',
        backgroundColor: '#faf9f8',
        color: '#a19f9d',
        borderRadius: '5px',
        fontWeight: '400'
    }
}
