import React from 'react';
import { StyleSheet } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import AntDesign from '@expo/vector-icons/AntDesign';
import { useState } from 'react';


const data = [
    { label: 'UI Developer', value: 'UI Developer' },
    { label: 'UX Developer', value: 'UX Developer' },
    { label: 'Backend Developer', value: 'Backend Developer' }
];

const DropdownComponent = () => {
    const [value, setValue] = useState<string | null>(null);

    return (
        <Dropdown
            style={styles.dropdown}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            inputSearchStyle={styles.inputSearchStyle}
            data={data}
            search
            maxHeight={300}
            labelField="label"
            valueField="value"
            placeholder="Select"
            searchPlaceholder="Search..."
            value={value}
            onChange={item => {
                setValue(item.value);
            }}
        />
    );
};

export default DropdownComponent;

const styles = StyleSheet.create({
    dropdown: {
        marginBottom: 16,
        height: 50,
        borderBottomColor: 'gray',
        borderBottomWidth: 0.5,
    },
    icon: {
        marginRight: 5,
    },
    placeholderStyle: {
        fontSize: 14,
    },
    selectedTextStyle: {
        fontSize: 14,
    },
    inputSearchStyle: {
        height: 35,
        fontSize: 14,
    },
});
