import { AppState } from "../AppState"
import { api } from "./AxiosService"


class EventsService {
  async getAll(query = {}) {
    const res = await api.get('api/events')
    console.log(res.data)
    AppState.events = res.data
  }
}

export const eventsService = new EventsService()