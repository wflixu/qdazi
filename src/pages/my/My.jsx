import { Button } from 'antd-mobile'
import { useSystemStore } from '../../store/system';
import { useNavigate } from "react-router-dom";

export function My() {
    const removeToken = useSystemStore(state => state.removeToken);
    const navigate = useNavigate();
    const logout = () => {
        removeToken();
        navigate('/login')
    }

    return (
        <div>
            <h1>My</h1>
            <div>
                <Button block color='primary' size='large' onClick={logout}>
                    退出登录
                </Button>
            </div>
        </div>
    )
}