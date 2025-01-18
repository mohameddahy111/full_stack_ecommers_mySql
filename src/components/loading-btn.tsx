import * as React from 'react';
import { Button } from './ui/button';
import { cn } from '@/lib/utils';
import { Loader2 } from 'lucide-react';

export interface ILoadingBtnProps {
    isLoading?: boolean;
    text : string;
    className?: string;
    disabled?: boolean;
    


}

export default function LoadingBtn ({isLoading , text , className , disabled  }: ILoadingBtnProps) {
  return (
    <Button disabled={disabled} type='submit' className={cn(`` , className)}>
      {isLoading ? (
        <div className=" flex justify-center items-center gap-2">
            <Loader2 className=' animate-spin size-4'/>
            <p>Loading ... </p>
        </div>
      ):<div>
        {text}
        </div>}
    </Button>
  );
}
