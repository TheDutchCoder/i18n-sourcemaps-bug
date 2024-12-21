export class ApiError extends Error {
  status: number
  traceId?: string
  detail?: DetailsBackendErrorInterface

  constructor(message: string, status: number, traceId?: string, detail?: DetailsBackendErrorInterface) {
    super(message)
    this.status = status
    this.name = 'ApiError'
    this.traceId = traceId
    this.detail = detail
  }
}

export type BackendErrorInterface = {
  Message: string
  title: string
  status: number
  traceId?: string
  detail?: DetailsBackendErrorInterface
  instance?: DetailsBackendErrorInterface
  type?: string
  Code?: string
}

export type DetailsBackendErrorInterface = {
  StatusCode?: number
  Code?: string
  Message?: string
}
