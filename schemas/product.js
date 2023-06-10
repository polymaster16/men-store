import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'product',
  title: 'Product',
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
        name: 'price',
        title: 'Price',
        type: 'number',
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
        name: 'description',
        title: 'Description',
        type: 'string',
      })
      ,
      defineField({
        name: 'store',
        title: 'Store',
        type: 'reference',
        to: {type: 'store'}
      })
    ],

    preview: {
        select: {
          title: 'name',
          subtitle: 'price',
          media: 'image',
        },
      },

});