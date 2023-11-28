import { Axis3D, FileSearch, CandlestickChart, Briefcase, WalletCards } from 'lucide-react';
import Link from 'next/link';
import { Button, ActionIcon, Text } from '@mantine/core';

import { data } from './d';
import { DefaultContainer } from '@/components/ui';


export const SideBar = () => {
    return (
        <DefaultContainer >
            {
                data.map((el) => (
                    <ActionIcon
                        size="xl"
                        variant="subtle"
                        component={Link}
                        key={el.label}
                        href={el.links}
                    >
                        {renderIcon(el.icon)}
                    </ActionIcon >
                )
                )
            }
        </DefaultContainer>

    )
}

const renderIcon = (iconName: string) => {
    switch (iconName) {
        case 'Axis3D':
            return <Axis3D size={33} />;
        case 'FileSearch':
            return <FileSearch size={33} />;
        case 'CandlestickChart':
            return <CandlestickChart size={33} />;
        case 'Briefcase':
            return <Briefcase size={33} />;
        case 'WalletCards':
            return <WalletCards size={33} />;
        default:
            return null;
    }
};