import { http} from './http'
export function getListUser() {
    return http.get('users');
}
export function getListTasks() {
    return http.get('tasks');
}
export function createTask(newTask) {
    return http.post('tasks', newTask);
}