import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'store',
  title: 'Store',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
        name: 'bg_image',
        title: 'Bg_image',
        type: 'image',
        options: {
          hotspot: true,
        },
      }),
    defineField({
      name: 'store_description',
      title: 'Store_description',
      type: 'string',
      
    }),
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image',
    },
  },
})
