import { CallbackDataParams } from 'echarts/types/dist/shared.js';
import 'index.css';
export const tooltipFormatterList = (params: CallbackDataParams[]) => {
  const result = params.map((param) => {
    return {
      value: param.value,
      label: param.name,
      seriesName: param.seriesName,
    };
  });
  // ${el.seriesName}, ${el.label}
  const tooltipItem = result
    .map(
      (el, index: number) =>
        `<h6 style="font-size: 12px; margin: 0; font-weight: 600;" ${
          (result.length === 1 || index > 0) && 'mb-0'
        }">
   ${el.seriesName}: ${el.value}

  </h6>`,
    )
    .join('');

  return `<div class="tooltip" style="">
            ${tooltipItem}
          </div>`;
};
