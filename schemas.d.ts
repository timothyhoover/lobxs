import {
  CollectionTypeSchema,
  StringAttribute,
  RequiredAttribute,
  SetMinMaxLength,
  JSONAttribute,
  DefaultTo,
  RelationAttribute,
  DateTimeAttribute,
  PrivateAttribute,
  EmailAttribute,
  UniqueAttribute,
  PasswordAttribute,
  BooleanAttribute,
  EnumerationAttribute,
  BigIntegerAttribute,
  IntegerAttribute,
  DecimalAttribute,
  SetMinMax,
  SetPluginOptions,
  TextAttribute,
  MediaAttribute,
  CustomField
} from '@strapi/strapi'

export interface AdminPermission extends CollectionTypeSchema {
  info: {
    name: 'Permission'
    description: ''
    singularName: 'permission'
    pluralName: 'permissions'
    displayName: 'Permission'
  }
  pluginOptions: {
    'content-manager': {
      visible: false
    }
    'content-type-builder': {
      visible: false
    }
  }
  attributes: {
    action: StringAttribute &
      RequiredAttribute &
      SetMinMaxLength<{
        minLength: 1
      }>
    subject: StringAttribute &
      SetMinMaxLength<{
        minLength: 1
      }>
    properties: JSONAttribute & DefaultTo<{}>
    conditions: JSONAttribute & DefaultTo<[]>
    role: RelationAttribute<'admin::permission', 'manyToOne', 'admin::role'>
    createdAt: DateTimeAttribute
    updatedAt: DateTimeAttribute
    createdBy: RelationAttribute<
      'admin::permission',
      'oneToOne',
      'admin::user'
    > &
      PrivateAttribute
    updatedBy: RelationAttribute<
      'admin::permission',
      'oneToOne',
      'admin::user'
    > &
      PrivateAttribute
  }
}

export interface AdminUser extends CollectionTypeSchema {
  info: {
    name: 'User'
    description: ''
    singularName: 'user'
    pluralName: 'users'
    displayName: 'User'
  }
  pluginOptions: {
    'content-manager': {
      visible: false
    }
    'content-type-builder': {
      visible: false
    }
  }
  attributes: {
    firstname: StringAttribute &
      SetMinMaxLength<{
        minLength: 1
      }>
    lastname: StringAttribute &
      SetMinMaxLength<{
        minLength: 1
      }>
    username: StringAttribute
    email: EmailAttribute &
      RequiredAttribute &
      PrivateAttribute &
      UniqueAttribute &
      SetMinMaxLength<{
        minLength: 6
      }>
    password: PasswordAttribute &
      PrivateAttribute &
      SetMinMaxLength<{
        minLength: 6
      }>
    resetPasswordToken: StringAttribute & PrivateAttribute
    registrationToken: StringAttribute & PrivateAttribute
    isActive: BooleanAttribute & PrivateAttribute & DefaultTo<false>
    roles: RelationAttribute<'admin::user', 'manyToMany', 'admin::role'> &
      PrivateAttribute
    blocked: BooleanAttribute & PrivateAttribute & DefaultTo<false>
    preferedLanguage: StringAttribute
    createdAt: DateTimeAttribute
    updatedAt: DateTimeAttribute
    createdBy: RelationAttribute<'admin::user', 'oneToOne', 'admin::user'> &
      PrivateAttribute
    updatedBy: RelationAttribute<'admin::user', 'oneToOne', 'admin::user'> &
      PrivateAttribute
  }
}

export interface AdminRole extends CollectionTypeSchema {
  info: {
    name: 'Role'
    description: ''
    singularName: 'role'
    pluralName: 'roles'
    displayName: 'Role'
  }
  pluginOptions: {
    'content-manager': {
      visible: false
    }
    'content-type-builder': {
      visible: false
    }
  }
  attributes: {
    name: StringAttribute &
      RequiredAttribute &
      UniqueAttribute &
      SetMinMaxLength<{
        minLength: 1
      }>
    code: StringAttribute &
      RequiredAttribute &
      UniqueAttribute &
      SetMinMaxLength<{
        minLength: 1
      }>
    description: StringAttribute
    users: RelationAttribute<'admin::role', 'manyToMany', 'admin::user'>
    permissions: RelationAttribute<
      'admin::role',
      'oneToMany',
      'admin::permission'
    >
    createdAt: DateTimeAttribute
    updatedAt: DateTimeAttribute
    createdBy: RelationAttribute<'admin::role', 'oneToOne', 'admin::user'> &
      PrivateAttribute
    updatedBy: RelationAttribute<'admin::role', 'oneToOne', 'admin::user'> &
      PrivateAttribute
  }
}

export interface AdminApiToken extends CollectionTypeSchema {
  info: {
    name: 'Api Token'
    singularName: 'api-token'
    pluralName: 'api-tokens'
    displayName: 'Api Token'
    description: ''
  }
  pluginOptions: {
    'content-manager': {
      visible: false
    }
    'content-type-builder': {
      visible: false
    }
  }
  attributes: {
    name: StringAttribute &
      RequiredAttribute &
      UniqueAttribute &
      SetMinMaxLength<{
        minLength: 1
      }>
    description: StringAttribute &
      SetMinMaxLength<{
        minLength: 1
      }> &
      DefaultTo<''>
    type: EnumerationAttribute<['read-only', 'full-access', 'custom']> &
      RequiredAttribute &
      DefaultTo<'read-only'>
    accessKey: StringAttribute &
      RequiredAttribute &
      SetMinMaxLength<{
        minLength: 1
      }>
    lastUsedAt: DateTimeAttribute
    permissions: RelationAttribute<
      'admin::api-token',
      'oneToMany',
      'admin::api-token-permission'
    >
    expiresAt: DateTimeAttribute
    lifespan: BigIntegerAttribute
    createdAt: DateTimeAttribute
    updatedAt: DateTimeAttribute
    createdBy: RelationAttribute<
      'admin::api-token',
      'oneToOne',
      'admin::user'
    > &
      PrivateAttribute
    updatedBy: RelationAttribute<
      'admin::api-token',
      'oneToOne',
      'admin::user'
    > &
      PrivateAttribute
  }
}

export interface AdminApiTokenPermission extends CollectionTypeSchema {
  info: {
    name: 'API Token Permission'
    description: ''
    singularName: 'api-token-permission'
    pluralName: 'api-token-permissions'
    displayName: 'API Token Permission'
  }
  pluginOptions: {
    'content-manager': {
      visible: false
    }
    'content-type-builder': {
      visible: false
    }
  }
  attributes: {
    action: StringAttribute &
      RequiredAttribute &
      SetMinMaxLength<{
        minLength: 1
      }>
    token: RelationAttribute<
      'admin::api-token-permission',
      'manyToOne',
      'admin::api-token'
    >
    createdAt: DateTimeAttribute
    updatedAt: DateTimeAttribute
    createdBy: RelationAttribute<
      'admin::api-token-permission',
      'oneToOne',
      'admin::user'
    > &
      PrivateAttribute
    updatedBy: RelationAttribute<
      'admin::api-token-permission',
      'oneToOne',
      'admin::user'
    > &
      PrivateAttribute
  }
}

export interface PluginUploadFile extends CollectionTypeSchema {
  info: {
    singularName: 'file'
    pluralName: 'files'
    displayName: 'File'
    description: ''
  }
  pluginOptions: {
    'content-manager': {
      visible: false
    }
    'content-type-builder': {
      visible: false
    }
  }
  attributes: {
    name: StringAttribute & RequiredAttribute
    alternativeText: StringAttribute
    caption: StringAttribute
    width: IntegerAttribute
    height: IntegerAttribute
    formats: JSONAttribute
    hash: StringAttribute & RequiredAttribute
    ext: StringAttribute
    mime: StringAttribute & RequiredAttribute
    size: DecimalAttribute & RequiredAttribute
    url: StringAttribute & RequiredAttribute
    previewUrl: StringAttribute
    provider: StringAttribute & RequiredAttribute
    provider_metadata: JSONAttribute
    related: RelationAttribute<'plugin::upload.file', 'morphToMany'>
    folder: RelationAttribute<
      'plugin::upload.file',
      'manyToOne',
      'plugin::upload.folder'
    > &
      PrivateAttribute
    folderPath: StringAttribute &
      RequiredAttribute &
      PrivateAttribute &
      SetMinMax<{
        min: 1
      }>
    createdAt: DateTimeAttribute
    updatedAt: DateTimeAttribute
    createdBy: RelationAttribute<
      'plugin::upload.file',
      'oneToOne',
      'admin::user'
    > &
      PrivateAttribute
    updatedBy: RelationAttribute<
      'plugin::upload.file',
      'oneToOne',
      'admin::user'
    > &
      PrivateAttribute
  }
}

export interface PluginUploadFolder extends CollectionTypeSchema {
  info: {
    singularName: 'folder'
    pluralName: 'folders'
    displayName: 'Folder'
  }
  pluginOptions: {
    'content-manager': {
      visible: false
    }
    'content-type-builder': {
      visible: false
    }
  }
  attributes: {
    name: StringAttribute &
      RequiredAttribute &
      SetMinMax<{
        min: 1
      }>
    pathId: IntegerAttribute & RequiredAttribute & UniqueAttribute
    parent: RelationAttribute<
      'plugin::upload.folder',
      'manyToOne',
      'plugin::upload.folder'
    >
    children: RelationAttribute<
      'plugin::upload.folder',
      'oneToMany',
      'plugin::upload.folder'
    >
    files: RelationAttribute<
      'plugin::upload.folder',
      'oneToMany',
      'plugin::upload.file'
    >
    path: StringAttribute &
      RequiredAttribute &
      SetMinMax<{
        min: 1
      }>
    createdAt: DateTimeAttribute
    updatedAt: DateTimeAttribute
    createdBy: RelationAttribute<
      'plugin::upload.folder',
      'oneToOne',
      'admin::user'
    > &
      PrivateAttribute
    updatedBy: RelationAttribute<
      'plugin::upload.folder',
      'oneToOne',
      'admin::user'
    > &
      PrivateAttribute
  }
}

export interface PluginUsersPermissionsPermission extends CollectionTypeSchema {
  info: {
    name: 'permission'
    description: ''
    singularName: 'permission'
    pluralName: 'permissions'
    displayName: 'Permission'
  }
  pluginOptions: {
    'content-manager': {
      visible: false
    }
    'content-type-builder': {
      visible: false
    }
  }
  attributes: {
    action: StringAttribute & RequiredAttribute
    role: RelationAttribute<
      'plugin::users-permissions.permission',
      'manyToOne',
      'plugin::users-permissions.role'
    >
    createdAt: DateTimeAttribute
    updatedAt: DateTimeAttribute
    createdBy: RelationAttribute<
      'plugin::users-permissions.permission',
      'oneToOne',
      'admin::user'
    > &
      PrivateAttribute
    updatedBy: RelationAttribute<
      'plugin::users-permissions.permission',
      'oneToOne',
      'admin::user'
    > &
      PrivateAttribute
  }
}

export interface PluginUsersPermissionsRole extends CollectionTypeSchema {
  info: {
    name: 'role'
    description: ''
    singularName: 'role'
    pluralName: 'roles'
    displayName: 'Role'
  }
  pluginOptions: {
    'content-manager': {
      visible: false
    }
    'content-type-builder': {
      visible: false
    }
  }
  attributes: {
    name: StringAttribute &
      RequiredAttribute &
      SetMinMaxLength<{
        minLength: 3
      }>
    description: StringAttribute
    type: StringAttribute & UniqueAttribute
    permissions: RelationAttribute<
      'plugin::users-permissions.role',
      'oneToMany',
      'plugin::users-permissions.permission'
    >
    users: RelationAttribute<
      'plugin::users-permissions.role',
      'oneToMany',
      'plugin::users-permissions.user'
    >
    createdAt: DateTimeAttribute
    updatedAt: DateTimeAttribute
    createdBy: RelationAttribute<
      'plugin::users-permissions.role',
      'oneToOne',
      'admin::user'
    > &
      PrivateAttribute
    updatedBy: RelationAttribute<
      'plugin::users-permissions.role',
      'oneToOne',
      'admin::user'
    > &
      PrivateAttribute
  }
}

export interface PluginUsersPermissionsUser extends CollectionTypeSchema {
  info: {
    name: 'user'
    description: ''
    singularName: 'user'
    pluralName: 'users'
    displayName: 'User'
  }
  options: {
    draftAndPublish: false
    timestamps: true
  }
  attributes: {
    username: StringAttribute &
      RequiredAttribute &
      UniqueAttribute &
      SetMinMaxLength<{
        minLength: 3
      }>
    email: EmailAttribute &
      RequiredAttribute &
      SetMinMaxLength<{
        minLength: 6
      }>
    provider: StringAttribute
    password: PasswordAttribute &
      PrivateAttribute &
      SetMinMaxLength<{
        minLength: 6
      }>
    resetPasswordToken: StringAttribute & PrivateAttribute
    confirmationToken: StringAttribute & PrivateAttribute
    confirmed: BooleanAttribute & DefaultTo<false>
    blocked: BooleanAttribute & DefaultTo<false>
    role: RelationAttribute<
      'plugin::users-permissions.user',
      'manyToOne',
      'plugin::users-permissions.role'
    >
    name: StringAttribute
    image: StringAttribute
    createdAt: DateTimeAttribute
    updatedAt: DateTimeAttribute
    createdBy: RelationAttribute<
      'plugin::users-permissions.user',
      'oneToOne',
      'admin::user'
    > &
      PrivateAttribute
    updatedBy: RelationAttribute<
      'plugin::users-permissions.user',
      'oneToOne',
      'admin::user'
    > &
      PrivateAttribute
  }
}

export interface PluginI18NLocale extends CollectionTypeSchema {
  info: {
    singularName: 'locale'
    pluralName: 'locales'
    collectionName: 'locales'
    displayName: 'Locale'
    description: ''
  }
  options: {
    draftAndPublish: false
  }
  pluginOptions: {
    'content-manager': {
      visible: false
    }
    'content-type-builder': {
      visible: false
    }
  }
  attributes: {
    name: StringAttribute &
      SetMinMax<{
        min: 1
        max: 50
      }>
    code: StringAttribute & UniqueAttribute
    createdAt: DateTimeAttribute
    updatedAt: DateTimeAttribute
    createdBy: RelationAttribute<
      'plugin::i18n.locale',
      'oneToOne',
      'admin::user'
    > &
      PrivateAttribute
    updatedBy: RelationAttribute<
      'plugin::i18n.locale',
      'oneToOne',
      'admin::user'
    > &
      PrivateAttribute
  }
}

export interface ApiCartItemCartItem extends CollectionTypeSchema {
  info: {
    singularName: 'cart-item'
    pluralName: 'cart-items'
    displayName: 'Cart Item'
    description: ''
  }
  options: {
    draftAndPublish: true
  }
  attributes: {
    quantity: IntegerAttribute
    product: RelationAttribute<
      'api::cart-item.cart-item',
      'oneToOne',
      'api::product.product'
    >
    shopping_session: RelationAttribute<
      'api::cart-item.cart-item',
      'oneToOne',
      'api::shopping-session.shopping-session'
    >
    createdAt: DateTimeAttribute
    updatedAt: DateTimeAttribute
    publishedAt: DateTimeAttribute
    createdBy: RelationAttribute<
      'api::cart-item.cart-item',
      'oneToOne',
      'admin::user'
    > &
      PrivateAttribute
    updatedBy: RelationAttribute<
      'api::cart-item.cart-item',
      'oneToOne',
      'admin::user'
    > &
      PrivateAttribute
  }
}

export interface ApiCategoryCategory extends CollectionTypeSchema {
  info: {
    singularName: 'category'
    pluralName: 'categories'
    displayName: 'Category'
    description: ''
  }
  options: {
    draftAndPublish: true
  }
  pluginOptions: {
    i18n: {
      localized: true
    }
  }
  attributes: {
    name: StringAttribute &
      RequiredAttribute &
      SetPluginOptions<{
        i18n: {
          localized: true
        }
      }>
    description: TextAttribute &
      SetPluginOptions<{
        i18n: {
          localized: true
        }
      }>
    createdAt: DateTimeAttribute
    updatedAt: DateTimeAttribute
    publishedAt: DateTimeAttribute
    createdBy: RelationAttribute<
      'api::category.category',
      'oneToOne',
      'admin::user'
    > &
      PrivateAttribute
    updatedBy: RelationAttribute<
      'api::category.category',
      'oneToOne',
      'admin::user'
    > &
      PrivateAttribute
    localizations: RelationAttribute<
      'api::category.category',
      'oneToMany',
      'api::category.category'
    >
    locale: StringAttribute
  }
}

export interface ApiDiscountDiscount extends CollectionTypeSchema {
  info: {
    singularName: 'discount'
    pluralName: 'discounts'
    displayName: 'Discount'
    description: ''
  }
  options: {
    draftAndPublish: true
  }
  pluginOptions: {
    i18n: {
      localized: true
    }
  }
  attributes: {
    name: StringAttribute &
      RequiredAttribute &
      UniqueAttribute &
      SetPluginOptions<{
        i18n: {
          localized: true
        }
      }>
    description: TextAttribute &
      SetPluginOptions<{
        i18n: {
          localized: true
        }
      }>
    discount_percent: DecimalAttribute &
      RequiredAttribute &
      SetPluginOptions<{
        i18n: {
          localized: true
        }
      }>
    active: BooleanAttribute &
      SetPluginOptions<{
        i18n: {
          localized: true
        }
      }>
    createdAt: DateTimeAttribute
    updatedAt: DateTimeAttribute
    publishedAt: DateTimeAttribute
    createdBy: RelationAttribute<
      'api::discount.discount',
      'oneToOne',
      'admin::user'
    > &
      PrivateAttribute
    updatedBy: RelationAttribute<
      'api::discount.discount',
      'oneToOne',
      'admin::user'
    > &
      PrivateAttribute
    localizations: RelationAttribute<
      'api::discount.discount',
      'oneToMany',
      'api::discount.discount'
    >
    locale: StringAttribute
  }
}

export interface ApiOrderDetailOrderDetail extends CollectionTypeSchema {
  info: {
    singularName: 'order-detail'
    pluralName: 'order-details'
    displayName: 'Order Detail'
    description: ''
  }
  options: {
    draftAndPublish: true
  }
  pluginOptions: {
    i18n: {
      localized: true
    }
  }
  attributes: {
    total: DecimalAttribute &
      SetPluginOptions<{
        i18n: {
          localized: true
        }
      }>
    users_permissions_user: RelationAttribute<
      'api::order-detail.order-detail',
      'oneToOne',
      'plugin::users-permissions.user'
    >
    payment_detail: RelationAttribute<
      'api::order-detail.order-detail',
      'oneToOne',
      'api::payment-detail.payment-detail'
    >
    createdAt: DateTimeAttribute
    updatedAt: DateTimeAttribute
    publishedAt: DateTimeAttribute
    createdBy: RelationAttribute<
      'api::order-detail.order-detail',
      'oneToOne',
      'admin::user'
    > &
      PrivateAttribute
    updatedBy: RelationAttribute<
      'api::order-detail.order-detail',
      'oneToOne',
      'admin::user'
    > &
      PrivateAttribute
    localizations: RelationAttribute<
      'api::order-detail.order-detail',
      'oneToMany',
      'api::order-detail.order-detail'
    >
    locale: StringAttribute
  }
}

export interface ApiOrderItemOrderItem extends CollectionTypeSchema {
  info: {
    singularName: 'order-item'
    pluralName: 'order-items'
    displayName: 'Order Item'
    description: ''
  }
  options: {
    draftAndPublish: true
  }
  pluginOptions: {
    i18n: {
      localized: true
    }
  }
  attributes: {
    quanitity: IntegerAttribute &
      SetPluginOptions<{
        i18n: {
          localized: true
        }
      }>
    order_detail: RelationAttribute<
      'api::order-item.order-item',
      'oneToOne',
      'api::order-detail.order-detail'
    >
    product: RelationAttribute<
      'api::order-item.order-item',
      'oneToOne',
      'api::product.product'
    >
    createdAt: DateTimeAttribute
    updatedAt: DateTimeAttribute
    publishedAt: DateTimeAttribute
    createdBy: RelationAttribute<
      'api::order-item.order-item',
      'oneToOne',
      'admin::user'
    > &
      PrivateAttribute
    updatedBy: RelationAttribute<
      'api::order-item.order-item',
      'oneToOne',
      'admin::user'
    > &
      PrivateAttribute
    localizations: RelationAttribute<
      'api::order-item.order-item',
      'oneToMany',
      'api::order-item.order-item'
    >
    locale: StringAttribute
  }
}

export interface ApiPaymentDetailPaymentDetail extends CollectionTypeSchema {
  info: {
    singularName: 'payment-detail'
    pluralName: 'payment-details'
    displayName: 'Payment Details'
    description: ''
  }
  options: {
    draftAndPublish: true
  }
  pluginOptions: {
    i18n: {
      localized: true
    }
  }
  attributes: {
    amount: DecimalAttribute &
      SetPluginOptions<{
        i18n: {
          localized: true
        }
      }>
    provider: StringAttribute &
      SetPluginOptions<{
        i18n: {
          localized: true
        }
      }>
    status: StringAttribute &
      SetPluginOptions<{
        i18n: {
          localized: true
        }
      }>
    order_detail: RelationAttribute<
      'api::payment-detail.payment-detail',
      'oneToOne',
      'api::order-detail.order-detail'
    >
    createdAt: DateTimeAttribute
    updatedAt: DateTimeAttribute
    publishedAt: DateTimeAttribute
    createdBy: RelationAttribute<
      'api::payment-detail.payment-detail',
      'oneToOne',
      'admin::user'
    > &
      PrivateAttribute
    updatedBy: RelationAttribute<
      'api::payment-detail.payment-detail',
      'oneToOne',
      'admin::user'
    > &
      PrivateAttribute
    localizations: RelationAttribute<
      'api::payment-detail.payment-detail',
      'oneToMany',
      'api::payment-detail.payment-detail'
    >
    locale: StringAttribute
  }
}

export interface ApiProductProduct extends CollectionTypeSchema {
  info: {
    singularName: 'product'
    pluralName: 'products'
    displayName: 'Product'
    description: ''
  }
  options: {
    draftAndPublish: true
  }
  pluginOptions: {
    i18n: {
      localized: true
    }
  }
  attributes: {
    name: StringAttribute &
      RequiredAttribute &
      SetPluginOptions<{
        i18n: {
          localized: true
        }
      }>
    description: TextAttribute &
      SetPluginOptions<{
        i18n: {
          localized: true
        }
      }>
    price: DecimalAttribute &
      SetPluginOptions<{
        i18n: {
          localized: true
        }
      }>
    images: MediaAttribute &
      SetPluginOptions<{
        i18n: {
          localized: true
        }
      }>
    category: RelationAttribute<
      'api::product.product',
      'oneToOne',
      'api::category.category'
    >
    discount: RelationAttribute<
      'api::product.product',
      'oneToOne',
      'api::discount.discount'
    >
    variations: RelationAttribute<
      'api::product.product',
      'oneToMany',
      'api::variation.variation'
    >
    featured: BooleanAttribute &
      SetPluginOptions<{
        i18n: {
          localized: true
        }
      }>
    subcategory: RelationAttribute<
      'api::product.product',
      'oneToOne',
      'api::subcategory.subcategory'
    >
    inventory: IntegerAttribute &
      SetPluginOptions<{
        i18n: {
          localized: true
        }
      }>
    createdAt: DateTimeAttribute
    updatedAt: DateTimeAttribute
    publishedAt: DateTimeAttribute
    createdBy: RelationAttribute<
      'api::product.product',
      'oneToOne',
      'admin::user'
    > &
      PrivateAttribute
    updatedBy: RelationAttribute<
      'api::product.product',
      'oneToOne',
      'admin::user'
    > &
      PrivateAttribute
    localizations: RelationAttribute<
      'api::product.product',
      'oneToMany',
      'api::product.product'
    >
    locale: StringAttribute
  }
}

export interface ApiRibbonRibbon extends CollectionTypeSchema {
  info: {
    singularName: 'ribbon'
    pluralName: 'ribbons'
    displayName: 'Ribbon'
    description: ''
  }
  options: {
    draftAndPublish: true
  }
  attributes: {
    name: StringAttribute
    color: StringAttribute & CustomField<'plugin::color-picker.color'>
    createdAt: DateTimeAttribute
    updatedAt: DateTimeAttribute
    publishedAt: DateTimeAttribute
    createdBy: RelationAttribute<
      'api::ribbon.ribbon',
      'oneToOne',
      'admin::user'
    > &
      PrivateAttribute
    updatedBy: RelationAttribute<
      'api::ribbon.ribbon',
      'oneToOne',
      'admin::user'
    > &
      PrivateAttribute
  }
}

export interface ApiShoppingSessionShoppingSession
  extends CollectionTypeSchema {
  info: {
    singularName: 'shopping-session'
    pluralName: 'shopping-sessions'
    displayName: 'Shopping Session'
    description: ''
  }
  options: {
    draftAndPublish: true
  }
  pluginOptions: {
    i18n: {
      localized: true
    }
  }
  attributes: {
    total: DecimalAttribute &
      SetPluginOptions<{
        i18n: {
          localized: true
        }
      }>
    users_permissions_user: RelationAttribute<
      'api::shopping-session.shopping-session',
      'oneToOne',
      'plugin::users-permissions.user'
    >
    createdAt: DateTimeAttribute
    updatedAt: DateTimeAttribute
    publishedAt: DateTimeAttribute
    createdBy: RelationAttribute<
      'api::shopping-session.shopping-session',
      'oneToOne',
      'admin::user'
    > &
      PrivateAttribute
    updatedBy: RelationAttribute<
      'api::shopping-session.shopping-session',
      'oneToOne',
      'admin::user'
    > &
      PrivateAttribute
    localizations: RelationAttribute<
      'api::shopping-session.shopping-session',
      'oneToMany',
      'api::shopping-session.shopping-session'
    >
    locale: StringAttribute
  }
}

export interface ApiSubcategorySubcategory extends CollectionTypeSchema {
  info: {
    singularName: 'subcategory'
    pluralName: 'subcategories'
    displayName: 'Subcategory'
    description: ''
  }
  options: {
    draftAndPublish: true
  }
  pluginOptions: {
    i18n: {
      localized: true
    }
  }
  attributes: {
    name: StringAttribute &
      RequiredAttribute &
      SetPluginOptions<{
        i18n: {
          localized: true
        }
      }>
    description: TextAttribute &
      SetPluginOptions<{
        i18n: {
          localized: true
        }
      }>
    createdAt: DateTimeAttribute
    updatedAt: DateTimeAttribute
    publishedAt: DateTimeAttribute
    createdBy: RelationAttribute<
      'api::subcategory.subcategory',
      'oneToOne',
      'admin::user'
    > &
      PrivateAttribute
    updatedBy: RelationAttribute<
      'api::subcategory.subcategory',
      'oneToOne',
      'admin::user'
    > &
      PrivateAttribute
    localizations: RelationAttribute<
      'api::subcategory.subcategory',
      'oneToMany',
      'api::subcategory.subcategory'
    >
    locale: StringAttribute
  }
}

export interface ApiTrainingPlanTrainingPlan extends CollectionTypeSchema {
  info: {
    singularName: 'training-plan'
    pluralName: 'training-plans'
    displayName: 'Training Plan'
    description: ''
  }
  options: {
    draftAndPublish: true
  }
  attributes: {
    name: StringAttribute & RequiredAttribute
    training_plan_features: RelationAttribute<
      'api::training-plan.training-plan',
      'oneToMany',
      'api::training-plan-feature.training-plan-feature'
    >
    price: DecimalAttribute & RequiredAttribute
    sub_text: StringAttribute
    ribbon: RelationAttribute<
      'api::training-plan.training-plan',
      'oneToOne',
      'api::ribbon.ribbon'
    >
    createdAt: DateTimeAttribute
    updatedAt: DateTimeAttribute
    publishedAt: DateTimeAttribute
    createdBy: RelationAttribute<
      'api::training-plan.training-plan',
      'oneToOne',
      'admin::user'
    > &
      PrivateAttribute
    updatedBy: RelationAttribute<
      'api::training-plan.training-plan',
      'oneToOne',
      'admin::user'
    > &
      PrivateAttribute
  }
}

export interface ApiTrainingPlanFeatureTrainingPlanFeature
  extends CollectionTypeSchema {
  info: {
    singularName: 'training-plan-feature'
    pluralName: 'training-plan-features'
    displayName: 'Training Plan Feature'
    description: ''
  }
  options: {
    draftAndPublish: true
  }
  pluginOptions: {
    i18n: {
      localized: true
    }
  }
  attributes: {
    feature: StringAttribute &
      SetPluginOptions<{
        i18n: {
          localized: true
        }
      }>
    icon: MediaAttribute &
      SetPluginOptions<{
        i18n: {
          localized: true
        }
      }>
    createdAt: DateTimeAttribute
    updatedAt: DateTimeAttribute
    publishedAt: DateTimeAttribute
    createdBy: RelationAttribute<
      'api::training-plan-feature.training-plan-feature',
      'oneToOne',
      'admin::user'
    > &
      PrivateAttribute
    updatedBy: RelationAttribute<
      'api::training-plan-feature.training-plan-feature',
      'oneToOne',
      'admin::user'
    > &
      PrivateAttribute
    localizations: RelationAttribute<
      'api::training-plan-feature.training-plan-feature',
      'oneToMany',
      'api::training-plan-feature.training-plan-feature'
    >
    locale: StringAttribute
  }
}

export interface ApiUserAddressUserAddress extends CollectionTypeSchema {
  info: {
    singularName: 'user-address'
    pluralName: 'user-addresses'
    displayName: 'User Address'
    description: ''
  }
  options: {
    draftAndPublish: true
  }
  pluginOptions: {
    i18n: {
      localized: true
    }
  }
  attributes: {
    address_line1: StringAttribute &
      SetPluginOptions<{
        i18n: {
          localized: true
        }
      }>
    address_line2: StringAttribute &
      SetPluginOptions<{
        i18n: {
          localized: true
        }
      }>
    city: StringAttribute &
      SetPluginOptions<{
        i18n: {
          localized: true
        }
      }>
    postal_code: StringAttribute &
      SetPluginOptions<{
        i18n: {
          localized: true
        }
      }>
    country: StringAttribute &
      SetPluginOptions<{
        i18n: {
          localized: true
        }
      }>
    telephone: StringAttribute &
      SetPluginOptions<{
        i18n: {
          localized: true
        }
      }>
    users_permissions_user: RelationAttribute<
      'api::user-address.user-address',
      'oneToOne',
      'plugin::users-permissions.user'
    >
    createdAt: DateTimeAttribute
    updatedAt: DateTimeAttribute
    publishedAt: DateTimeAttribute
    createdBy: RelationAttribute<
      'api::user-address.user-address',
      'oneToOne',
      'admin::user'
    > &
      PrivateAttribute
    updatedBy: RelationAttribute<
      'api::user-address.user-address',
      'oneToOne',
      'admin::user'
    > &
      PrivateAttribute
    localizations: RelationAttribute<
      'api::user-address.user-address',
      'oneToMany',
      'api::user-address.user-address'
    >
    locale: StringAttribute
  }
}

export interface ApiVariationVariation extends CollectionTypeSchema {
  info: {
    singularName: 'variation'
    pluralName: 'variations'
    displayName: 'Variation'
    description: ''
  }
  options: {
    draftAndPublish: true
  }
  pluginOptions: {
    i18n: {
      localized: true
    }
  }
  attributes: {
    name: StringAttribute &
      RequiredAttribute &
      SetPluginOptions<{
        i18n: {
          localized: true
        }
      }>
    createdAt: DateTimeAttribute
    updatedAt: DateTimeAttribute
    publishedAt: DateTimeAttribute
    createdBy: RelationAttribute<
      'api::variation.variation',
      'oneToOne',
      'admin::user'
    > &
      PrivateAttribute
    updatedBy: RelationAttribute<
      'api::variation.variation',
      'oneToOne',
      'admin::user'
    > &
      PrivateAttribute
    localizations: RelationAttribute<
      'api::variation.variation',
      'oneToMany',
      'api::variation.variation'
    >
    locale: StringAttribute
  }
}

declare global {
  namespace Strapi {
    interface Schemas {
      'admin::permission': AdminPermission
      'admin::user': AdminUser
      'admin::role': AdminRole
      'admin::api-token': AdminApiToken
      'admin::api-token-permission': AdminApiTokenPermission
      'plugin::upload.file': PluginUploadFile
      'plugin::upload.folder': PluginUploadFolder
      'plugin::users-permissions.permission': PluginUsersPermissionsPermission
      'plugin::users-permissions.role': PluginUsersPermissionsRole
      'plugin::users-permissions.user': PluginUsersPermissionsUser
      'plugin::i18n.locale': PluginI18NLocale
      'api::cart-item.cart-item': ApiCartItemCartItem
      'api::category.category': ApiCategoryCategory
      'api::discount.discount': ApiDiscountDiscount
      'api::order-detail.order-detail': ApiOrderDetailOrderDetail
      'api::order-item.order-item': ApiOrderItemOrderItem
      'api::payment-detail.payment-detail': ApiPaymentDetailPaymentDetail
      'api::product.product': ApiProductProduct
      'api::ribbon.ribbon': ApiRibbonRibbon
      'api::shopping-session.shopping-session': ApiShoppingSessionShoppingSession
      'api::subcategory.subcategory': ApiSubcategorySubcategory
      'api::training-plan.training-plan': ApiTrainingPlanTrainingPlan
      'api::training-plan-feature.training-plan-feature': ApiTrainingPlanFeatureTrainingPlanFeature
      'api::user-address.user-address': ApiUserAddressUserAddress
      'api::variation.variation': ApiVariationVariation
    }
  }
}
