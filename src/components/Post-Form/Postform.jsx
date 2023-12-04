import React, { useCallback, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

// Import custom components (Assumed)
// import Input from 'path-to/Input';
// import Select from 'path-to/Select';
// import Button from 'path-to/Button';

export default function Postform({ post }) {
  // Destructuring form methods from react-hook-form
  const { register, handleSubmit, setValue, watch, getValues } = useForm({
    defaultValues: {
      title: post?.title || '',
      slug: post?.$id || '',
      content: post?.content || '',
      status: post?.status || 'active',
    },
  });

  // React Router's navigation hook
  const navigate = useNavigate();

  // Redux selector to get user data
  const userData = useSelector((state) => state.auth.userData);

  // Submit function for form handling
  const submit = async (data) => {
    if (post) {
      // Assuming 'appwriteService' has methods like 'uploadeFile', 'deleteFile', 'uploadPost', 'getFilePreview'
      const file = data.image[0] ? await appwriteService.uploadeFile(data.image[0]) : null;
      if (file) {
        appwriteService.deleteFile(post.featuredImage);
      }
      const dbPost = await appwriteService.uploadPost(post.$id, { ...data, featuredImage: file ? file.$id : undefined });
      if (dbPost) {
        // {toast} - Consider adding a notification or toast here
        navigate(`/post/${dbPost.$id}`);
      }
    }
  };

  // Function to transform a string into a slug
  const slugTransform = useCallback((value) => {
    if (value && typeof value === 'string') {
      return value.trim().toLowerCase().replace(/[^a-zA-Z\d\s]+/g, '-').replace(/\s/g, '-');
    }
    return '';
  }, []);

  // Effect to update the 'slug' based on changes in the 'title'
  useEffect(() => {
    const subscription = watch((value, { name }) => {
      if (name === 'title') {
        setValue('slug', slugTransform(value.title), { shouldValidate: true });
      }
    });
    // Unsubscribe when the component unmounts
    return () => subscription.unsubscribe();
  }, [watch, slugTransform, setValue]);

  return (
    <form onSubmit={handleSubmit(submit)} className="flex flex-wrap">
      <div className="w-2/3 px-2">
        {/* Assuming 'Input' is a custom component */}
        <Input label="Title :" placeholder="Title" className="mb-4" {...register('title', { required: true })} />
        {/* Assuming 'Input' is a custom component */}
        <Input
          label="Slug :"
          placeholder="Slug"
          className="mb-4"
          {...register('slug', { required: true })}
          onInput={(e) => {
            setValue('slug', slugTransform(e.currentTarget.value), { shouldValidate: true });
          }}
        />
      </div>
      <div className="w-1/3 px-2">
        {/* Assuming 'Input' is a custom component */}
        <Input
          label="Featured Image :"
          type="file"
          className="mb-4"
          accept="image/png, image/jpg, image/jpeg, image/gif"
          {...register('image', { required: !post })}
        />
        {post && (
          <div className="w-full mb-4">
            <img src={appwriteService.getFilePreview(post.featuredImage)} alt={post.title} className="rounded-lg" />
          </div>
        )}
        {/* Assuming 'Select' is a custom component */}
        <Select options={['active', 'inactive']} label="Status" className="mb-4" {...register('status', { required: true })} />
        {/* Assuming 'Button' is a custom component */}
        <Button type="submit" bgColor={post ? 'bg-green-500' : undefined} className="w-full">
          {post ? 'Update' : 'Submit'}
        </Button>
      </div>
    </form>
  );
}
