import { CatalogKind, ICamelComponentDefinition } from '../models';

export const logComponent: ICamelComponentDefinition = {
  component: {
    kind: CatalogKind.Component,
    name: 'log',
    title: 'Log',
    description: 'Log messages to the underlying logging mechanism.',
    deprecated: false,
    firstVersion: '1.1.0',
    label: 'core,monitoring',
    javaType: 'org.apache.camel.component.log.LogComponent',
    supportLevel: 'Stable',
    groupId: 'org.apache.camel',
    artifactId: 'camel-log',
    version: '4.2.0',
    scheme: 'log',
    extendsScheme: '',
    syntax: 'log:loggerName',
    async: false,
    api: false,
    consumerOnly: false,
    producerOnly: true,
    lenientProperties: false,
  },
  componentProperties: {
    lazyStartProducer: {
      index: 0,
      kind: 'property',
      displayName: 'Lazy Start Producer',
      group: 'producer',
      label: 'producer',
      required: false,
      type: 'boolean',
      javaType: 'boolean',
      deprecated: false,
      autowired: false,
      secret: false,
      defaultValue: false,
      description:
        "Whether the producer should be started lazy (on the first message). By starting lazy you can use this to allow CamelContext and routes to startup in situations where a producer may otherwise fail during starting and cause the route to fail being started. By deferring this startup to be lazy then the startup failure can be handled during routing messages via Camel's routing error handlers. Beware that when the first message is processed then creating and starting the producer may take a little time and prolong the total processing time of the processing.",
    },
    sourceLocationLoggerName: {
      index: 1,
      kind: 'property',
      displayName: 'Source Location Logger Name',
      group: 'producer',
      label: '',
      required: false,
      type: 'boolean',
      javaType: 'boolean',
      deprecated: false,
      autowired: false,
      secret: false,
      defaultValue: false,
      description:
        'If enabled then the source location of where the log endpoint is used in Camel routes, would be used as logger name, instead of the given name. However, if the source location is disabled or not possible to resolve then the existing logger name will be used.',
    },
    autowiredEnabled: {
      index: 2,
      kind: 'property',
      displayName: 'Autowired Enabled',
      group: 'advanced',
      label: 'advanced',
      required: false,
      type: 'boolean',
      javaType: 'boolean',
      deprecated: false,
      autowired: false,
      secret: false,
      defaultValue: true,
      description:
        'Whether autowiring is enabled. This is used for automatic autowiring options (the option must be marked as autowired) by looking up in the registry to find if there is a single instance of matching type, which then gets configured on the component. This can be used for automatic configuring JDBC data sources, JMS connection factories, AWS Clients, etc.',
    },
    exchangeFormatter: {
      index: 3,
      kind: 'property',
      displayName: 'Exchange Formatter',
      group: 'advanced',
      label: 'advanced',
      required: false,
      type: 'object',
      javaType: 'org.apache.camel.spi.ExchangeFormatter',
      deprecated: false,
      autowired: true,
      secret: false,
      description:
        'Sets a custom ExchangeFormatter to convert the Exchange to a String suitable for logging. If not specified, we default to DefaultExchangeFormatter.',
    },
  },
  properties: {
    loggerName: {
      index: 0,
      kind: 'path',
      displayName: 'Logger Name',
      group: 'producer',
      label: '',
      required: true,
      type: 'string',
      javaType: 'java.lang.String',
      deprecated: false,
      deprecationNote: '',
      autowired: false,
      secret: false,
      description: 'Name of the logging category to use',
    },
    groupActiveOnly: {
      index: 1,
      kind: 'parameter',
      displayName: 'Group Active Only',
      group: 'producer',
      label: '',
      required: false,
      type: 'boolean',
      javaType: 'java.lang.Boolean',
      deprecated: false,
      autowired: false,
      secret: false,
      defaultValue: 'true',
      description:
        'If true, will hide stats when no new messages have been received for a time interval, if false, show stats regardless of message traffic.',
    },
    groupDelay: {
      index: 2,
      kind: 'parameter',
      displayName: 'Group Delay',
      group: 'producer',
      label: '',
      required: false,
      type: 'integer',
      javaType: 'java.lang.Long',
      deprecated: false,
      autowired: false,
      secret: false,
      description: 'Set the initial delay for stats (in millis)',
    },
    groupInterval: {
      index: 3,
      kind: 'parameter',
      displayName: 'Group Interval',
      group: 'producer',
      label: '',
      required: false,
      type: 'integer',
      javaType: 'java.lang.Long',
      deprecated: false,
      autowired: false,
      secret: false,
      description: 'If specified will group message stats by this time interval (in millis)',
    },
    groupSize: {
      index: 4,
      kind: 'parameter',
      displayName: 'Group Size',
      group: 'producer',
      label: '',
      required: false,
      type: 'integer',
      javaType: 'java.lang.Integer',
      deprecated: false,
      autowired: false,
      secret: false,
      description: 'An integer that specifies a group size for throughput logging.',
    },
    level: {
      index: 5,
      kind: 'parameter',
      displayName: 'Level',
      group: 'producer',
      label: '',
      required: false,
      type: 'string',
      javaType: 'java.lang.String',
      enum: ['TRACE', 'DEBUG', 'INFO', 'WARN', 'ERROR', 'OFF'],
      deprecated: false,
      autowired: false,
      secret: false,
      defaultValue: 'INFO',
      description: 'Logging level to use. The default value is INFO.',
    },
    logMask: {
      index: 6,
      kind: 'parameter',
      displayName: 'Log Mask',
      group: 'producer',
      label: '',
      required: false,
      type: 'boolean',
      javaType: 'java.lang.Boolean',
      deprecated: false,
      autowired: false,
      secret: false,
      description: 'If true, mask sensitive information like password or passphrase in the log.',
    },
    marker: {
      index: 7,
      kind: 'parameter',
      displayName: 'Marker',
      group: 'producer',
      label: '',
      required: false,
      type: 'string',
      javaType: 'java.lang.String',
      deprecated: false,
      autowired: false,
      secret: false,
      description: 'An optional Marker name to use.',
    },
    plain: {
      index: 8,
      kind: 'parameter',
      displayName: 'Plain',
      group: 'producer',
      label: '',
      required: false,
      type: 'boolean',
      javaType: 'boolean',
      deprecated: false,
      autowired: false,
      secret: false,
      defaultValue: false,
      description: 'If enabled only the body will be printed out',
    },
    sourceLocationLoggerName: {
      index: 9,
      kind: 'parameter',
      displayName: 'Source Location Logger Name',
      group: 'producer',
      label: '',
      required: false,
      type: 'boolean',
      javaType: 'boolean',
      deprecated: false,
      autowired: false,
      secret: false,
      defaultValue: false,
      description:
        'If enabled then the source location of where the log endpoint is used in Camel routes, would be used as logger name, instead of the given name. However, if the source location is disabled or not possible to resolve then the existing logger name will be used.',
    },
    lazyStartProducer: {
      index: 10,
      kind: 'parameter',
      displayName: 'Lazy Start Producer',
      group: 'producer (advanced)',
      label: 'producer,advanced',
      required: false,
      type: 'boolean',
      javaType: 'boolean',
      deprecated: false,
      autowired: false,
      secret: false,
      defaultValue: false,
      description:
        "Whether the producer should be started lazy (on the first message). By starting lazy you can use this to allow CamelContext and routes to startup in situations where a producer may otherwise fail during starting and cause the route to fail being started. By deferring this startup to be lazy then the startup failure can be handled during routing messages via Camel's routing error handlers. Beware that when the first message is processed then creating and starting the producer may take a little time and prolong the total processing time of the processing.",
    },
    exchangeFormatter: {
      index: 11,
      kind: 'parameter',
      displayName: 'Exchange Formatter',
      group: 'advanced',
      label: 'advanced',
      required: false,
      type: 'object',
      javaType: 'org.apache.camel.spi.ExchangeFormatter',
      deprecated: false,
      autowired: false,
      secret: false,
      description: 'To use a custom exchange formatter',
    },
    maxChars: {
      index: 12,
      kind: 'parameter',
      displayName: 'Max Chars',
      group: 'formatting',
      label: 'formatting',
      required: false,
      type: 'integer',
      javaType: 'int',
      deprecated: false,
      autowired: false,
      secret: false,
      defaultValue: 10000,
      description: 'Limits the number of characters logged per line.',
    },
    multiline: {
      index: 13,
      kind: 'parameter',
      displayName: 'Multiline',
      group: 'formatting',
      label: 'formatting',
      required: false,
      type: 'boolean',
      javaType: 'boolean',
      deprecated: false,
      autowired: false,
      secret: false,
      defaultValue: false,
      description: 'If enabled then each information is outputted on a newline.',
    },
    showAll: {
      index: 14,
      kind: 'parameter',
      displayName: 'Show All',
      group: 'formatting',
      label: 'formatting',
      required: false,
      type: 'boolean',
      javaType: 'boolean',
      deprecated: false,
      autowired: false,
      secret: false,
      defaultValue: false,
      description:
        'Quick option for turning all options on. (multiline, maxChars has to be manually set if to be used)',
    },
    showAllProperties: {
      index: 15,
      kind: 'parameter',
      displayName: 'Show All Properties',
      group: 'formatting',
      label: 'formatting',
      required: false,
      type: 'boolean',
      javaType: 'boolean',
      deprecated: false,
      autowired: false,
      secret: false,
      defaultValue: false,
      description: 'Show all of the exchange properties (both internal and custom).',
    },
    showBody: {
      index: 16,
      kind: 'parameter',
      displayName: 'Show Body',
      group: 'formatting',
      label: 'formatting',
      required: false,
      type: 'boolean',
      javaType: 'boolean',
      deprecated: false,
      autowired: false,
      secret: false,
      defaultValue: true,
      description: 'Show the message body.',
    },
    showBodyType: {
      index: 17,
      kind: 'parameter',
      displayName: 'Show Body Type',
      group: 'formatting',
      label: 'formatting',
      required: false,
      type: 'boolean',
      javaType: 'boolean',
      deprecated: false,
      autowired: false,
      secret: false,
      defaultValue: true,
      description: 'Show the body Java type.',
    },
    showCachedStreams: {
      index: 18,
      kind: 'parameter',
      displayName: 'Show Cached Streams',
      group: 'formatting',
      label: 'formatting',
      required: false,
      type: 'boolean',
      javaType: 'boolean',
      deprecated: false,
      autowired: false,
      secret: false,
      defaultValue: true,
      description: 'Whether Camel should show cached stream bodies or not (org.apache.camel.StreamCache).',
    },
    showCaughtException: {
      index: 19,
      kind: 'parameter',
      displayName: 'Show Caught Exception',
      group: 'formatting',
      label: 'formatting',
      required: false,
      type: 'boolean',
      javaType: 'boolean',
      deprecated: false,
      autowired: false,
      secret: false,
      defaultValue: false,
      description:
        'If the exchange has a caught exception, show the exception message (no stack trace). A caught exception is stored as a property on the exchange (using the key org.apache.camel.Exchange#EXCEPTION_CAUGHT) and for instance a doCatch can catch exceptions.',
    },
    showException: {
      index: 20,
      kind: 'parameter',
      displayName: 'Show Exception',
      group: 'formatting',
      label: 'formatting',
      required: false,
      type: 'boolean',
      javaType: 'boolean',
      deprecated: false,
      autowired: false,
      secret: false,
      defaultValue: false,
      description: 'If the exchange has an exception, show the exception message (no stacktrace)',
    },
    showExchangeId: {
      index: 21,
      kind: 'parameter',
      displayName: 'Show Exchange Id',
      group: 'formatting',
      label: 'formatting',
      required: false,
      type: 'boolean',
      javaType: 'boolean',
      deprecated: false,
      autowired: false,
      secret: false,
      defaultValue: false,
      description: 'Show the unique exchange ID.',
    },
    showExchangePattern: {
      index: 22,
      kind: 'parameter',
      displayName: 'Show Exchange Pattern',
      group: 'formatting',
      label: 'formatting',
      required: false,
      type: 'boolean',
      javaType: 'boolean',
      deprecated: false,
      autowired: false,
      secret: false,
      defaultValue: false,
      description: 'Shows the Message Exchange Pattern (or MEP for short).',
    },
    showFiles: {
      index: 23,
      kind: 'parameter',
      displayName: 'Show Files',
      group: 'formatting',
      label: 'formatting',
      required: false,
      type: 'boolean',
      javaType: 'boolean',
      deprecated: false,
      autowired: false,
      secret: false,
      defaultValue: false,
      description: 'If enabled Camel will output files',
    },
    showFuture: {
      index: 24,
      kind: 'parameter',
      displayName: 'Show Future',
      group: 'formatting',
      label: 'formatting',
      required: false,
      type: 'boolean',
      javaType: 'boolean',
      deprecated: false,
      autowired: false,
      secret: false,
      defaultValue: false,
      description:
        'If enabled Camel will on Future objects wait for it to complete to obtain the payload to be logged.',
    },
    showHeaders: {
      index: 25,
      kind: 'parameter',
      displayName: 'Show Headers',
      group: 'formatting',
      label: 'formatting',
      required: false,
      type: 'boolean',
      javaType: 'boolean',
      deprecated: false,
      autowired: false,
      secret: false,
      defaultValue: false,
      description: 'Show the message headers.',
    },
    showProperties: {
      index: 26,
      kind: 'parameter',
      displayName: 'Show Properties',
      group: 'formatting',
      label: 'formatting',
      required: false,
      type: 'boolean',
      javaType: 'boolean',
      deprecated: false,
      autowired: false,
      secret: false,
      defaultValue: false,
      description:
        'Show the exchange properties (only custom). Use showAllProperties to show both internal and custom properties.',
    },
    showStackTrace: {
      index: 27,
      kind: 'parameter',
      displayName: 'Show Stack Trace',
      group: 'formatting',
      label: 'formatting',
      required: false,
      type: 'boolean',
      javaType: 'boolean',
      deprecated: false,
      autowired: false,
      secret: false,
      defaultValue: false,
      description:
        'Show the stack trace, if an exchange has an exception. Only effective if one of showAll, showException or showCaughtException are enabled.',
    },
    showStreams: {
      index: 28,
      kind: 'parameter',
      displayName: 'Show Streams',
      group: 'formatting',
      label: 'formatting',
      required: false,
      type: 'boolean',
      javaType: 'boolean',
      deprecated: false,
      autowired: false,
      secret: false,
      defaultValue: false,
      description:
        'Whether Camel should show stream bodies or not (eg such as java.io.InputStream). Beware if you enable this option then you may not be able later to access the message body as the stream have already been read by this logger. To remedy this you will have to use Stream Caching.',
    },
    skipBodyLineSeparator: {
      index: 29,
      kind: 'parameter',
      displayName: 'Skip Body Line Separator',
      group: 'formatting',
      label: 'formatting',
      required: false,
      type: 'boolean',
      javaType: 'boolean',
      deprecated: false,
      autowired: false,
      secret: false,
      defaultValue: true,
      description:
        'Whether to skip line separators when logging the message body. This allows to log the message body in one line, setting this option to false will preserve any line separators from the body, which then will log the body as is.',
    },
    style: {
      index: 30,
      kind: 'parameter',
      displayName: 'Style',
      group: 'formatting',
      label: 'formatting',
      required: false,
      type: 'object',
      javaType: 'org.apache.camel.support.processor.DefaultExchangeFormatter.OutputStyle',
      enum: ['Default', 'Tab', 'Fixed'],
      deprecated: false,
      autowired: false,
      secret: false,
      defaultValue: 'Default',
      description: 'Sets the outputs style to use.',
    },
  },
};