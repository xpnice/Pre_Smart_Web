import request from '@/utils/request'
export function login (data) {
    return request({
        url: `?process=login`,
        method: 'post',
        data
    })
}
