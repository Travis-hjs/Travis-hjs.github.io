interface FormatJsonOption<T> {
  /** 表头字段 */
  header: string
  /** 对应表头的字段`key` */
  key: keyof T
  /** 
   * 条件处理函数
   * @param item 表单当前项
   * @param index 索引
   */
  handle?: (item: T, index: number) => number | string
}

interface NativeExportOption {
  /** 表格头部列表 */
  header: Array<string>
  /**
   * 添加的表格头部
   * - 在固定头部的前面插入
   */
  insertHeader?: string
  /** 导出的表格数据（二维数组） */
  data: Array<Array<string | number>>
  /** 导出的文件名 */
  fileName: string
  /** 表格文字排版 */
  textAlign?: "left"|"center"|"right"
  /** 图片尺寸配置 */
  imgSize?: {
    /** 图片宽度，默认 100 */
    width?: number
    /** 图片宽度，默认 100 */
    height?: number
  }
}

namespace CustomTable {
  interface Column<T> {
    /** 标题 */
    label: string;
    /**
     * 数据键值
     * - 当`prop: "actions"`时固定为靠右操作列
     */
    prop: keyof T | "actions";
    /** 列宽 */
    width?: string;
    /** 最小列宽 */
    minWidth?: string;
    /**
     * 自定义渲染函数
     * @param row
     * @param index
     */
    render?: (row: T, index: number) => string | HTMLElement;
  }

  interface Action<T> {
    /**
     * 按钮文字
     */
    text: string | ((row: T, index: number) => string);
    /**
     * 按钮点击事件
     * @param row 当前表格行数据对象
     * @param index 行索引
     */
    click?: (row: T, index: number) => void;
    /** 按钮禁用条件 */
    disabled?: boolean | ((row: T) => boolean);
    /** 按钮类名 */
    className?: string;
  }

  export interface Props<T> {
    /** 表格挂载的节点 */
    el: HTMLElement;
    /** 表格数据 */
    data: Array<T>;
    /** 表格列配置 */
    columns: Array<Column<T>>;
    /**
     * 操作列表
     * - 当`option.columns`中存在`prop: "actions"`时生效
     */
    actions?: Array<Action<T>>;
  }
}
