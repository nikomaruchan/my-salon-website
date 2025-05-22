import React from 'react';
import { useForm } from 'react-hook-form';
import Input from '../../common/Input';
import Button from '../../common/Button';

const ProfileEditor = ({ defaultValues, onSubmit }) => {
    const { register, handleSubmit } = useForm({ defaultValues });

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
                <label>名前</label>
                <Input {...register('name')} />
            </div>
            <div>
                <label>メール</label>
                <Input {...register('email')} type="email" />
            </div>
            <Button type="submit">保存</Button>
        </form>
    );
};

export default ProfileEditor;
