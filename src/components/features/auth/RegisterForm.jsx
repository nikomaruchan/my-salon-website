import React from 'react';
import { useForm } from 'react-hook-form';
import Input from '../../common/Input';
import Button from '../../common/Button';

const RegisterForm = () => {
    const { register, handleSubmit } = useForm();

    const onSubmit = (data) => {
        console.log('登録情報:', data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
                <label>お名前</label>
                <Input {...register('name')} />
            </div>
            <div>
                <label>メール</label>
                <Input {...register('email')} type="email" />
            </div>
            <div>
                <label>パスワード</label>
                <Input {...register('password')} type="password" />
            </div>
            <Button type="submit">登録</Button>
        </form>
    );
};

export default RegisterForm;
