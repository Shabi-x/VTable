import type { ColumnsDefine } from '@visactor/vtable';
import { register } from '@visactor/vtable';
import { DateInputEditor, InputEditor } from '@visactor/vtable-editors';
import type { GanttConstructorOptions, TYPES } from '../../src/index';
import { Gantt } from '../../src/index';
import { bindDebugTool } from '../../../vtable/src/scenegraph/debug-tool';
const CONTAINER_ID = 'vTable';
const date_input_editor = new DateInputEditor({});
const input_editor = new InputEditor({});
register.editor('input', input_editor);
register.editor('date-input', date_input_editor);
export function createTable() {
  const records0 = [
    {
      id: 1,
      title: 'Software Development',
      developer: 'liufangfang.jane@bytedance.com',
      start: '2024-07-30',
      end: '2024-08-14',
      progress: 31,
      priority: 'P0',
      children: [
        {
          id: 2,
          title: 'Scope',
          developer: 'liufangfang.jane@bytedance.com',
          start: '2024-07-24',
          end: '2024-08-04',
          progress: 60,
          priority: 'P0'
        },
        {
          id: 3,
          title: 'Determine project scope',
          developer: 'liufangfang.jane@bytedance.com',
          start: '2024/07/24',
          end: '2024/08/04',
          progress: 100,
          priority: 'P1'
        }
      ]
    },
    {
      id: 2,
      title: 'Scope',
      developer: 'liufangfang.jane@bytedance.com',
      start: '07/24/2024',
      end: '08/04/2024',
      progress: 60,
      priority: 'P0'
    },
    {
      id: 3,
      title: 'Determine project scope',
      developer: 'liufangfang.jane@bytedance.com',
      start: '2024-07-24',
      end: '2024-08-04',
      progress: 100,
      priority: 'P1',
      children: [
        {
          id: 1,
          title: 'Software Development',
          developer: 'liufangfang.jane@bytedance.com',
          start: '2024-08-04',
          end: '2024-08-04',
          progress: 90,
          priority: 'P0'
        },
        {
          id: 1,
          title: 'Software Development',
          developer: 'liufangfang.jane@bytedance.com',
          start: '2024-07-24',
          end: '2024-08-04',
          progress: 31,
          priority: 'P0'
        },
        {
          id: 2,
          title: 'Scope',
          developer: 'liufangfang.jane@bytedance.com',
          start: '2024.07.06',
          end: '2024.07.08',
          progress: 60,
          priority: 'P0'
        },
        {
          id: 3,
          title: 'Determine project scope',
          developer: 'liufangfang.jane@bytedance.com',
          start: '2024/07/09',
          end: '2024/07/11',
          progress: 100,
          priority: 'P1'
        },
        {
          id: 1,
          title: 'Software Development',
          developer: 'liufangfang.jane@bytedance.com',
          start: '07.24.2024',
          end: '08.04.2024',
          progress: 31,
          priority: 'P0'
        },
        {
          id: 2,
          title: 'Scope',
          developer: 'liufangfang.jane@bytedance.com',
          start: '2024-07-06',
          end: '2024-07-08',
          progress: 60,
          priority: 'P0'
        },
        {
          id: 3,
          title: 'Determine project scope',
          developer: 'liufangfang.jane@bytedance.com',
          start: '2024-08-09',
          end: '2024-09-11',
          progress: 100,
          priority: 'P1'
        }
      ]
    },

    {
      id: 1,
      title: 'Software Development',
      developer: 'liufangfang.jane@bytedance.com',
      start: '2024-07-24',
      end: '2024-08-04',
      progress: 31,
      priority: 'P0'
    },
    {
      id: 2,
      title: 'Scope',
      developer: 'liufangfang.jane@bytedance.com',
      start: '2024-07-06',
      end: '2024-07-08',
      progress: 60,
      priority: 'P0',
      children: [
        {
          id: 3,
          title: 'Determine project scope',
          developer: 'liufangfang.jane@bytedance.com',
          start: '2024-07-09',
          end: '2024-07-11',
          progress: 100,
          priority: 'P1',
          children: [
            {
              id: 1,
              title: 'Software Development',
              developer: 'liufangfang.jane@bytedance.com',
              start: '2024-07-24',
              end: '2024-08-04',
              progress: 31,
              priority: 'P0'
            },
            {
              id: 2,
              title: 'Scope',
              developer: 'liufangfang.jane@bytedance.com',
              start: '2024-07-06',
              end: '2024-07-08',
              progress: 60,
              priority: 'P0'
            },
            {
              id: 3,
              title: 'Determine project scope',
              developer: 'liufangfang.jane@bytedance.com',
              start: '2024-07-09',
              end: '2024-07-11',
              progress: 100,
              priority: 'P1'
            }
          ]
        },
        {
          id: 1,
          title: 'Software Development',
          developer: 'liufangfang.jane@bytedance.com',
          start: '2024-07-24',
          end: '2024-08-04',
          progress: 31,
          priority: 'P0',
          children: [
            {
              id: 1,
              title: 'Software Development',
              developer: 'liufangfang.jane@bytedance.com',
              start: '2024-07-24',
              end: '2024-08-04',
              progress: 31,
              priority: 'P0'
            },
            {
              id: 2,
              title: 'Scope',
              developer: 'liufangfang.jane@bytedance.com',
              start: '2024-07-06',
              end: '2024-07-08',
              progress: 60,
              priority: 'P0'
            },
            {
              id: 3,
              title: 'Determine project scope',
              developer: 'liufangfang.jane@bytedance.com',
              start: '2024-07-09',
              end: '2024-07-11',
              progress: 100,
              priority: 'P1'
            }
          ]
        },
        {
          id: 2,
          title: 'Scope',
          developer: 'liufangfang.jane@bytedance.com',
          start: '2024-07-06',
          end: '2024-07-08',
          progress: 60,
          priority: 'P0'
        },
        {
          id: 3,
          title: 'Determine project scope',
          developer: 'liufangfang.jane@bytedance.com',
          start: '2024-07-09',
          end: '2024-07-11',
          progress: 100,
          priority: 'P1',
          children: [
            {
              id: 1,
              title: 'Software Development',
              developer: 'liufangfang.jane@bytedance.com',
              start: '2024-07-24',
              end: '2024-08-04',
              progress: 31,
              priority: 'P0'
            },
            {
              id: 2,
              title: 'Scope',
              developer: 'liufangfang.jane@bytedance.com',
              start: '2024-07-06',
              end: '2024-07-08',
              progress: 60,
              priority: 'P0'
            }
          ]
        },
        {
          id: 1,
          title: 'Software Development',
          developer: 'liufangfang.jane@bytedance.com',
          start: '2024-07-24',
          end: '2024-08-04',
          progress: 31,
          priority: 'P0'
        },
        {
          id: 2,
          title: 'Scope',
          developer: 'liufangfang.jane@bytedance.com',
          start: '2024-07-06',
          end: '2024-07-08',
          progress: 60,
          priority: 'P0'
        },
        {
          id: 3,
          title: 'Determine project scope',
          developer: 'liufangfang.jane@bytedance.com',
          start: '2024-07-09',
          end: '2024-07-11',
          progress: 100,
          priority: 'P1'
        }
      ]
    },

    {
      id: 3,
      title: 'Determine project scope',
      developer: 'liufangfang.jane@bytedance.com',
      start: '2024-07-09',
      end: '2024-07-11',
      progress: 100,
      priority: 'P1',
      children: [
        {
          id: 1,
          title: 'Software Development',
          developer: 'liufangfang.jane@bytedance.com',
          start: '2024-07-24',
          end: '2024-08-04',
          progress: 31,
          priority: 'P0'
        },
        {
          id: 2,
          title: 'Scope',
          developer: 'liufangfang.jane@bytedance.com',
          start: '2024-07-06',
          end: '2024-07-08',
          progress: 60,
          priority: 'P0'
        },
        {
          id: 3,
          title: 'Determine project scope',
          developer: 'liufangfang.jane@bytedance.com',
          start: '2024-07-09',
          end: '2024-07-11',
          progress: 100,
          priority: 'P1'
        },
        {
          id: 1,
          title: 'Software Development',
          developer: 'liufangfang.jane@bytedance.com',
          start: '2024-07-30',
          end: '2024-08-14',
          progress: 31,
          priority: 'P0'
        },
        {
          id: 2,
          title: 'Scope',
          developer: 'liufangfang.jane@bytedance.com',
          start: '2024-07-24',
          end: '2024-08-04',
          progress: 60,
          priority: 'P0'
        }
      ]
    },
    {
      id: 1,
      title: 'Software Development',
      developer: 'liufangfang.jane@bytedance.com',
      start: '2024-07-24',
      end: '2024-08-04',
      progress: 31,
      priority: 'P0',
      children: [
        {
          id: 3,
          title: 'Determine project scope',
          developer: 'liufangfang.jane@bytedance.com',
          start: '2024/07/24',
          end: '2024/08/04',
          progress: 100,
          priority: 'P1'
        },
        {
          id: 1,
          title: 'Software Development',
          developer: 'liufangfang.jane@bytedance.com',
          start: '2024-08-04',
          end: '2024-08-04',
          progress: 90,
          priority: 'P0'
        },
        {
          id: 2,
          title: 'Scope',
          developer: 'liufangfang.jane@bytedance.com',
          start: '07/24/2024',
          end: '08/04/2024',
          progress: 60,
          priority: 'P0'
        }
      ]
    },
    {
      id: 2,
      title: 'Scope',
      developer: 'liufangfang.jane@bytedance.com',
      start: '2024-07-06',
      end: '2024-07-08',
      progress: 60,
      priority: 'P0'
    },
    {
      id: 3,
      title: 'Determine project scope',
      developer: 'liufangfang.jane@bytedance.com',
      start: '2024-07-09',
      end: '2024-07-11',
      progress: 100,
      priority: 'P1',
      children: [
        {
          id: 1,
          title: 'Software Development',
          developer: 'liufangfang.jane@bytedance.com',
          start: '07.24.2024',
          end: '08.04.2024',
          progress: 31,
          priority: 'P0'
        },
        {
          id: 2,
          title: 'Scope',
          developer: 'liufangfang.jane@bytedance.com',
          start: '2024-07-06',
          end: '2024-07-08',
          progress: 60,
          priority: 'P0'
        },
        {
          id: 3,
          title: 'Determine project scope',
          developer: 'liufangfang.jane@bytedance.com',
          start: '2024-08-09',
          end: '2024-09-11',
          progress: 100,
          priority: 'P1'
        },
        {
          id: 1,
          title: 'Software Development',
          developer: 'liufangfang.jane@bytedance.com',
          start: '2024-07-24',
          end: '2024-08-04',
          progress: 31,
          priority: 'P0'
        },
        {
          id: 2,
          title: 'Scope',
          developer: 'liufangfang.jane@bytedance.com',
          start: '2024-07-06',
          end: '2024-07-08',
          progress: 60,
          priority: 'P0'
        },
        {
          id: 3,
          title: 'Determine project scope',
          developer: 'liufangfang.jane@bytedance.com',
          start: '2024-07-09',
          end: '2024-07-11',
          progress: 100,
          priority: 'P1'
        },
        {
          id: 1,
          title: 'Software Development',
          developer: 'liufangfang.jane@bytedance.com',
          start: '2024-07-24',
          end: '2024-08-04',
          progress: 31,
          priority: 'P0'
        },
        {
          id: 2,
          title: 'Scope',
          developer: 'liufangfang.jane@bytedance.com',
          start: '2024-07-06',
          end: '2024-07-08',
          progress: 60,
          priority: 'P0'
        },
        {
          id: 3,
          title: 'Determine project scope',
          developer: 'liufangfang.jane@bytedance.com',
          start: '2024-07-09',
          end: '2024-07-11',
          progress: 100,
          priority: 'P1'
        }
      ]
    },
    {
      id: 1,
      title: 'Software Development',
      developer: 'liufangfang.jane@bytedance.com',
      start: '2024-07-24',
      end: '2024-08-04',
      progress: 31,
      priority: 'P0',
      children: [
        {
          id: 3,
          title: 'Determine project scope',
          developer: 'liufangfang.jane@bytedance.com',
          start: '2024-07-24',
          end: '2024-08-04',
          progress: 100,
          priority: 'P1'
        },
        {
          id: 1,
          title: 'Software Development',
          developer: 'liufangfang.jane@bytedance.com',
          start: '2024-07-24',
          end: '2024-08-04',
          progress: 31,
          priority: 'P0'
        },
        {
          id: 2,
          title: 'Scope',
          developer: 'liufangfang.jane@bytedance.com',
          start: '2024.07.06',
          end: '2024.07.08',
          progress: 60,
          priority: 'P0'
        },
        {
          id: 3,
          title: 'Determine project scope',
          developer: 'liufangfang.jane@bytedance.com',
          start: '2024/07/09',
          end: '2024/07/11',
          progress: 100,
          priority: 'P1'
        }
      ]
    }
  ];

  const records = [];
  for (let i = 0; i < 1000; i++) {
    records.push(...records0);
  }
  const columns: ColumnsDefine = [
    // {
    //   field: 'id',
    //   title: 'ID',
    //   width: 80,
    //   sort: true
    // },
    {
      field: 'title',
      title: 'title',
      width: 200,
      sort: true,
      tree: true,
      editor: 'input'
    },
    {
      field: 'start',
      title: 'start',
      width: 150,
      sort: true,
      editor: 'date-input'
    },
    {
      field: 'end',
      title: 'end',
      width: 150,
      sort: true,
      editor: 'date-input'
    },
    {
      field: 'priority',
      title: 'priority',
      width: 100,
      sort: true,
      editor: 'input'
    },
    {
      field: 'progress',
      title: 'progress',
      width: 80,
      sort: true,
      headerStyle: {
        borderColor: '#e1e4e8'
      },
      style: {
        borderColor: '#e1e4e8',
        color: 'green'
      },
      editor: 'input'
    }
  ];
  const option: GanttConstructorOptions = {
    overscrollBehavior: 'none',
    records,
    taskListTable: {
      columns,
      width: 'auto',
      minWidth: 100,
      maxWidth: 600,
      headerStyle: {
        borderColor: '#e1e4e8',
        borderLineWidth: 1,
        fontSize: 18,
        fontWeight: 'bold',
        color: 'red',
        bgColor: '#EEF1F5'
      },
      bodyStyle: {
        borderColor: '#e1e4e8',
        borderLineWidth: [1, 0, 1, 0],
        fontSize: 16,
        color: '#4D4D4D',
        bgColor: '#FFF'
      }
      //rightFrozenColCount: 1
    },

    startDateField: 'start',
    endDateField: 'end',
    progressField: 'progress',
    frame: {
      outerFrameStyle: {
        borderLineWidth: 2,
        borderColor: 'red',
        cornerRadius: 8
      },
      verticalSplitLine: {
        lineColor: '#e1e4e8',
        lineWidth: 3
      },
      horizontalSplitLine: {
        lineColor: '#e1e4e8',
        lineWidth: 3
      },
      verticalSplitLineMoveable: true,
      verticalSplitLineHighlight: {
        lineColor: 'green',
        lineWidth: 3
      }
    },
    gridStyle: {
      // backgroundColor: 'gray',
      // vertical: {
      //   lineWidth: 1,
      //   lineColor: '#e1e4e8'
      // },
      horizontalLine: {
        lineWidth: 1,
        lineColor: '#e1e4e8'
      }
    },
    headerRowHeight: 60,
    rowHeight: 40,
    taskBar: {
      // resizable: false,
      moveable: false,
      hoverBarStyle: {
        barOverLayColor: 'rgba(99, 144, 0, 0.4)'
      },
      labelText: '{title} {progress}%',
      labelTextStyle: {
        padding: 2,
        fontFamily: 'Arial',
        fontSize: 16,
        textAlign: 'left',
        textOverflow: 'ellipsis'
      },
      barStyle: {
        width: 20,
        /** 任务条的颜色 */
        barColor: '#ee8800',
        /** 已完成部分任务条的颜色 */
        completedBarColor: '#91e8e0',
        /** 任务条的圆角 */
        cornerRadius: 8,
        /** 任务条的边框 */
        borderWidth: 1,
        /** 边框颜色 */
        borderColor: 'black'
      }
    },
    timelineHeader: {
      backgroundColor: '#EEF1F5',
      horizontalLine: {
        lineWidth: 1,
        lineColor: '#e1e4e8'
      },
      scales: [
        {
          unit: 'week',
          step: 1,
          startOfWeek: 'sunday',
          format(date: TYPES.DateFormatArgumentType) {
            return `Week ${date.dateIndex}`;
          },
          style: {
            fontSize: 20,
            fontWeight: 'bold',
            color: 'white',
            strokeColor: 'black',
            textAlign: 'right',
            textBaseline: 'bottom',
            backgroundColor: '#EEF1F5'
          }
        },
        {
          unit: 'day',
          step: 1,
          format(date: TYPES.DateFormatArgumentType) {
            return date.dateIndex.toString();
          },
          style: {
            fontSize: 20,
            fontWeight: 'bold',
            color: 'white',
            strokeColor: 'black',
            textAlign: 'right',
            textBaseline: 'bottom',
            backgroundColor: '#EEF1F5'
          }
        }
        // {
        //   unit: 'quarter',
        //   step: 1,
        //   format(date: TYPES.DateFormatArgumentType) {
        //     return '第' + date.index + '季度';
        //   }
        // }
      ]
    },
    minDate: '2024-07-07',
    maxDate: '2024-10-15',
    markLine: [
      {
        date: '2024-07-17',
        style: {
          lineWidth: 1,
          lineColor: 'blue',
          lineDash: [8, 4]
        }
      },
      {
        date: '2024-08-17',
        style: {
          lineWidth: 2,
          lineColor: 'red',
          lineDash: [8, 4]
        }
      }
    ],
    rowSeriesNumber: {
      title: '行号',
      dragOrder: true,
      headerStyle: {
        bgColor: '#EEF1F5',
        borderColor: '#e1e4e8'
      },
      style: {
        borderColor: '#e1e4e8'
      }
    },
    scrollStyle: {
      scrollRailColor: 'RGBA(246,246,246,0.5)',
      visible: 'always',
      width: 6,
      scrollSliderCornerRadius: 2,
      scrollSliderColor: '#5cb85c'
    }
  };
  // columns:[
  //   {
  //     title:'2024-07',
  //     columns:[
  //       {
  //         title:'01'
  //       },
  //       {
  //         title:'02'
  //       },
  //       ...
  //     ]
  //   },
  //   ...
  // ]
  const tableInstance = new Gantt(document.getElementById(CONTAINER_ID)!, option);
  window.tableInstance = tableInstance;
  tableInstance.on('scroll', e => {
    console.log('scroll', e);
  });

  tableInstance.taskListTableInstance?.on('scroll', e => {
    console.log('listTable scroll', e);
  });
  // bindDebugTool(tableInstance.scenegraph.stage as any, {
  //   customGrapicKeys: ['role', '_updateTag']
  // });
}
