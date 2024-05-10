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

interface NativeExportOptions {
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
