'use client'


import { cn } from '@/lib/utils';
import { useTranslations } from 'next-intl';
import * as React from 'react';

export interface IHeroTitleProps {
    title : string
    className?: string
}

export default function HeroTitle ({title , className}: IHeroTitleProps) {
    const t =useTranslations()
  return (
    <h2 className={cn(` text-2xl font-bold text-[#203040] p-2 ` , className)}>
        {t(title)}
    </h2>
  );
}
