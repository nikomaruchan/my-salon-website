import React from 'react';
import { useForm } from 'react-hook-form';
import Input from '../../common/Input';
import Button from '../../common/Button';

const LoginForm = () => {
    const { register, handleSubmit } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
                <label>メール</label>
                <Input {...register('email')} type="email" />
            </div>
            <div>
                <label>パスワード</label>
                <Input {...register('password')} type="password" />
            </div>
            <Button type="submit">ログイン</Button>
        </form>
    );
};

export default LoginForm;
