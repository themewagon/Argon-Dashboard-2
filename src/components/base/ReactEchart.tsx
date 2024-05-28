import { Box, BoxProps } from '@mui/material';
import { EChartsReactProps } from 'echarts-for-react';
import {
  default as EChartsReactCore,
  default as ReactEChartsCore,
} from 'echarts-for-react/lib/core';
import { forwardRef } from 'react';

export interface ReactEchartProps extends BoxProps {
  echarts: EChartsReactProps['echarts'];
  option: EChartsReactProps['option'];
}

const ReactEchart = forwardRef<null | EChartsReactCore, ReactEchartProps>(
  ({ option, ...rest }, ref) => {
    return (
      <Box
        component={ReactEChartsCore}
        opts={{ renderer: 'svg' }}
        lazyUpdate={true}
        ref={ref}
        option={{
          ...option,
          tooltip: {
            ...option.tooltip,
          },
        }}
        {...rest}
      />
    );
  },
);

export default ReactEchart;
