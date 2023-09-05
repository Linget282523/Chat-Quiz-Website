import { getDatabase } from "../../api";

export function* workerSaga() {
    const data = yield getDatabase();
}

export function* watchClickSaga() {
    
}


export default function* rootSaga() {
    yield watchClickSaga();

}