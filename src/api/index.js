import fetch from '@/api/fetch'
import qs from 'qs'

const prefix = ''

// GET
export const get = options => {
  let param = qs.stringify(options.data)
  return fetch({
    method: 'GET',
    url: `${prefix}${options.url}?${param}`,
    noDialog: options.noDialog ? options.noDialog : false
  })
}

// POST
export const post = options =>
  fetch({
    method: 'POST',
    url: `${prefix}${options.url}`,
    data: options.data,
    noDialog: options.noDialog ? options.noDialog : false
  })

// PUT
export const put = options =>
  fetch({
    method: 'PUT',
    url: `${prefix}${options.url}/PUT`,
    data: options.data,
    noDialog: options.noDialog ? options.noDialog : false
  })

// DELETE
export const del = options =>
  fetch({
    method: 'DELETE',
    url: `${prefix}${options.url}/PUT`,
    data: options.data,
    noDialog: options.noDialog ? options.noDialog : false
  })
