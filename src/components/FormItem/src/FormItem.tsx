import { styles } from '@/lib/styles';
import { cn } from '@/lib/utils';
import * as React from 'react';
import { Label } from '../../Label';
import { FormItemProps } from '../types';

const FormItem = React.forwardRef<HTMLDivElement, FormItemProps>(
  ({ label, hintText, errorText, className, children }, ref) => {
    return (
      <div
        ref={ref}
        className={cn('space-y-1', className)}
        data-error={errorText ? 'true' : undefined}
      >
        <div className="space-y-1">
          {label ? (
            typeof label === 'string' ? (
              <Label className="font-bold">{label}</Label>
            ) : (
              label
            )
          ) : null}
          {hintText ? <p className={styles.text.hint}>{hintText}</p> : null}
        </div>
        {children}
        {errorText ? <p className={styles.text.error}>{errorText}</p> : null}
      </div>
    );
  },
);
FormItem.displayName = 'FormItem';

export { FormItem };
