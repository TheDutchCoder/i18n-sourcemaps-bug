import pino from 'pino'

const initParams = {
  browser: {
    asObject: true,
  },
}

export const logger = pino(initParams)

export const captureError = (error, context = {}) => {
  const errorInfo = {
    error: {
      message: error.message,
      stack: error.stack,
      name: error.name,
    },
    context,
  }

  logger.error(errorInfo)
}
