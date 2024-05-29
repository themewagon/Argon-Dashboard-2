import {
  BarChart,
  // SeriesOption
  BarSeriesOption,
  LineChart,
  LineSeriesOption,
} from 'echarts/charts';
import {
  DatasetComponent,
  DatasetComponentOption,
  GridComponent,
  GridComponentOption,
  TitleComponent,
  //  ComponentOption
  TitleComponentOption,
  TooltipComponent,
  TooltipComponentOption,
  //  (filter, sort)
  TransformComponent,
} from 'echarts/components';
import * as echarts from 'echarts/core';
import { LabelLayout, UniversalTransition } from 'echarts/features';
import { CanvasRenderer } from 'echarts/renderers';

// Use ComposeOption to compose an Option type that only has required components and charts
export type ECOption = echarts.ComposeOption<
  | BarSeriesOption
  | LineSeriesOption
  | TitleComponentOption
  | GridComponentOption
  | DatasetComponentOption
  | TooltipComponentOption
>;

// Register required components
echarts.use([
  TitleComponent,
  TooltipComponent,
  GridComponent,
  DatasetComponent,
  TransformComponent,
  BarChart,
  LineChart,
  LabelLayout,
  UniversalTransition,
  CanvasRenderer,
]);

export default echarts;
