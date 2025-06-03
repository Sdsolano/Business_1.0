// components/sections/features/FeatureCards.jsx - Versión limpia sin filtros
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Settings, 
  Zap, 
  Globe, 
  Cloud, 
  MessageSquare, 
  Database, 
  Shield, 
  Users,
  ChevronRight,
  Check,
  Star,
  Sparkles,
  Brain,
  Cpu,
  Bot,
  Lock,
  TrendingUp,
  Eye,
  Play,
  ArrowUpRight
} from 'lucide-react';

function FeatureCards() {
  const [hoveredCard, setHoveredCard] = useState(null);

  const features = [
    {
      title: "Personalización Avanzada",
      description: "Adaptamos cada asistente virtual para que refleje perfectamente la personalidad y valores de tu marca.",
      details: "Nuestros asistentes pueden aprender tu tono de voz, términos específicos de tu industria, y preferencias de estilo de comunicación. Cada interacción será única y perfectamente alineada con la identidad de tu empresa.",
      icon: Settings,
      color: "from-blue-500 via-blue-600 to-indigo-700",
      features: ["Adaptación de tono y estilo", "Terminología específica", "Branding personalizado", "Flujos únicos"],
      metrics: { accuracy: "99.2%", setup: "2-3 días", satisfaction: "98%" }
    },
    {
      title: "Reconocimiento de Intención",
      description: "Nuestros asistentes entienden lo que tus clientes quieren, incluso cuando no lo expresan claramente.",
      details: "Utilizando avanzados algoritmos de procesamiento de lenguaje natural, detectamos la intención real detrás de las preguntas, incluso cuando son imprecisas o contienen errores. Esto reduce la frustración del cliente y aumenta la tasa de resolución al primer contacto.",
      icon: Brain,
      color: "from-amber-500 via-orange-600 to-red-700",
      features: ["NLP avanzado", "Detección de contexto", "Análisis de sentimiento", "Corrección automática"],
      metrics: { accuracy: "96.8%", speed: "<150ms", languages: "30+" }
    },
    {
      title: "Multi-idioma Nativo",
      description: "Comunicación fluida con tus clientes en cualquier idioma, detectando automáticamente su preferencia.",
      details: "Soporte para más de 30 idiomas con detección automática. Tu asistente puede cambiar de idioma en medio de una conversación sin perder contexto. Ideal para negocios con presencia internacional o en áreas con diversidad lingüística.",
      icon: Globe,
      color: "from-emerald-500 via-green-600 to-teal-700",
      features: ["30+ idiomas soportados", "Detección automática", "Cambio dinámico", "Contexto preservado"],
      metrics: { languages: "30+", accuracy: "94%", coverage: "Global" }
    },
    {
      title: "Aprendizaje Continuo",
      description: "El sistema aprende de cada interacción para mejorar constantemente sus respuestas y eficacia.",
      details: "Utilizamos técnicas de aprendizaje automático para analizar patrones en las conversaciones, identificar brechas de conocimiento y mejorar automáticamente. Tu asistente será cada vez más eficiente con el tiempo, sin necesidad de intervención manual.",
      icon: Cpu,
      color: "from-indigo-500 via-purple-600 to-blue-700",
      features: ["Machine Learning", "Mejora automática", "Análisis de patrones", "Optimización continua"],
      metrics: { improvement: "+15%/mes", learning: "24/7", updates: "Automáticas" }
    },
    {
      title: "Integración Omnicanal",
      description: "Conecta sin problemas WhatsApp, Telegram, Gmail y otras plataformas para una experiencia coherente.",
      details: "Centraliza todas tus comunicaciones en una plataforma unificada. Tu cliente puede comenzar una conversación en WhatsApp y continuarla por email sin perder contexto. Todos los canales sincronizados y con seguimiento integral.",
      icon: MessageSquare,
      color: "from-violet-500 via-purple-600 to-indigo-700",
      features: ["Múltiples canales", "Contexto unificado", "Sincronización real-time", "Historial completo"],
      metrics: { channels: "10+", sync: "Real-time", uptime: "99.9%" }
    },
    {
      title: "Analytics en Tiempo Real",
      description: "Monitorea y analiza el rendimiento de tu asistente con métricas detalladas y reportes.",
      details: "Panel de control con métricas clave como tiempo de respuesta, tasa de resolución, satisfacción del cliente y volumen de conversaciones. Reportes automáticos semanales y alertas personalizables para mantenerte siempre informado.",
      icon: TrendingUp,
      color: "from-rose-500 via-pink-600 to-red-700",
      features: ["Dashboard en tiempo real", "Métricas personalizadas", "Reportes automáticos", "Alertas inteligentes"],
      metrics: { metrics: "50+", reports: "Automáticos", alerts: "Tiempo real" }
    },
    {
      title: "Seguridad de Datos",
      description: "Encriptación de extremo a extremo y cumplimiento total con regulaciones de privacidad.",
      details: "Infraestructura segura con encriptación AES-256, cumplimiento GDPR y LGPD, auditorías de seguridad regulares, y políticas estrictas de retención de datos. Tu información y la de tus clientes siempre protegida bajo los más altos estándares.",
      icon: Shield,
      color: "from-teal-500 via-cyan-600 to-blue-700",
      features: ["Encriptación AES-256", "Cumplimiento GDPR", "Auditorías regulares", "Backup automático"],
      metrics: { encryption: "AES-256", compliance: "100%", uptime: "99.99%" }
    },
    {
      title: "Escalabilidad Garantizada",
      description: "Desde pequeñas empresas hasta grandes corporaciones, nuestra plataforma crece contigo.",
      details: "Arquitectura en la nube que se adapta automáticamente a cualquier volumen de interacciones. Puedes pasar de 10 a 10,000 conversaciones diarias sin degradación del servicio. Ideal para negocios en crecimiento o con temporadas de alta demanda.",
      icon: Users,
      color: "from-fuchsia-500 via-pink-600 to-purple-700",
      features: ["Auto-escalado", "Sin límites", "Performance constante", "Arquitectura cloud"],
      metrics: { capacity: "Ilimitada", scaling: "Automático", performance: "Constante" }
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: (i) => ({ 
      y: 0, 
      opacity: 1,
      transition: { 
        delay: i * 0.1,
        duration: 0.6,
        ease: "easeOut"
      }
    }),
    hover: { 
      y: -12,
      transition: { type: "spring", stiffness: 400, damping: 15 }
    }
  };

  const expandVariants = {
    collapsed: { 
      height: 0, 
      opacity: 0,
      transition: { 
        height: { duration: 0.4 },
        opacity: { duration: 0.3 }
      }
    },
    expanded: { 
      height: "auto", 
      opacity: 1,
      transition: { 
        height: { duration: 0.5 },
        opacity: { duration: 0.4, delay: 0.1 }
      }
    }
  };

  return (
    <div className="relative">
      {/* Grid de características con animaciones increíbles */}
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        <AnimatePresence mode="wait">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const isExpanded = hoveredCard === index;
            
            return (
              <motion.div 
                key={feature.title}
                className="relative group cursor-pointer"
                variants={cardVariants}
                custom={index}
                initial="hidden"
                animate="visible"
                exit="hidden"
                whileHover="hover"
                onHoverStart={() => setHoveredCard(index)}
                onHoverEnd={() => setHoveredCard(null)}
                layout
              >
                {/* Efecto glow dinámico */}
                <motion.div 
                  className={`absolute -inset-1 bg-gradient-to-r ${feature.color} rounded-2xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-500`}
                  animate={{ opacity: isExpanded ? 0.3 : 0 }}
                />
                
                {/* Tarjeta principal */}
                <motion.div 
                  className="relative bg-gray-800/90 backdrop-blur-xl rounded-2xl overflow-hidden border border-gray-700/50 group-hover:border-purple-500/50 transition-all duration-500 h-full"
                  whileHover={{ 
                    boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" 
                  }}
                >
                  {/* Header con gradiente animado */}
                  <div className="relative p-6 pb-4">
                    {/* Barra de color superior */}
                    <motion.div 
                      className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${feature.color}`}
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ duration: 0.8, delay: index * 0.1 }}
                    />
                    
                    <div className="flex items-start justify-between">
                      <motion.div 
                        className={`bg-gradient-to-br ${feature.color} rounded-xl p-3 relative overflow-hidden group-hover:scale-110 transition-transform duration-300`}
                        whileHover={{ rotate: 5 }}
                      >
                        <Icon className="h-7 w-7 text-white relative z-10" />
                        
                        {/* Efecto de brillo */}
                        <motion.div 
                          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                          initial={{ x: '-100%' }}
                          animate={{ x: '100%' }}
                          transition={{ 
                            duration: 1.5, 
                            repeat: Infinity, 
                            repeatDelay: 3,
                            ease: "easeInOut"
                          }}
                        />
                      </motion.div>
                      
                      <motion.div
                        className="text-purple-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        whileHover={{ scale: 1.2, rotate: 90 }}
                      >
                        <ArrowUpRight className="h-5 w-5" />
                      </motion.div>
                    </div>
                    
                    <motion.h3 
                      className="text-xl font-bold text-white mt-4 mb-3 group-hover:text-purple-300 transition-colors duration-300"
                      layoutId={`title-${index}`}
                    >
                      {feature.title}
                    </motion.h3>
                    
                    {/* Línea decorativa animada */}
                    <motion.div 
                      className={`h-0.5 bg-gradient-to-r ${feature.color} rounded-full mb-4`}
                      initial={{ width: 0 }}
                      animate={{ width: '100%' }}
                      transition={{ duration: 0.8, delay: index * 0.1 + 0.3 }}
                    />
                    
                    <p className="text-gray-300 group-hover:text-gray-200 transition-colors duration-300 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                  
                  {/* Métricas rápidas */}
                  <div className="px-6 pb-4">
                    <div className="grid grid-cols-3 gap-2 text-center">
                      {Object.entries(feature.metrics).slice(0, 3).map(([key, value], i) => (
                        <motion.div 
                          key={key}
                          className="bg-gray-700/30 rounded-lg p-2"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.1 + i * 0.1 + 0.5 }}
                        >
                          <div className={`text-sm font-bold text-transparent bg-clip-text bg-gradient-to-r ${feature.color}`}>
                            {value}
                          </div>
                          <div className="text-xs text-gray-400 capitalize">{key}</div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Contenido expandible */}
                  <motion.div
                    className="overflow-hidden bg-gray-800/50"
                    variants={expandVariants}
                    animate={isExpanded ? "expanded" : "collapsed"}
                  >
                    <div className="p-6 pt-4 border-t border-gray-700/50">
                      <h4 className="text-sm font-semibold text-purple-300 mb-3 flex items-center">
                        <Eye className="h-4 w-4 mr-2" />
                        Detalles técnicos
                      </h4>
                      
                      <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                        {feature.details}
                      </p>
                      
                      <div className="space-y-2 mb-4">
                        <h5 className="text-xs font-semibold text-purple-400 uppercase tracking-wide">
                          Características clave
                        </h5>
                        {feature.features.map((feat, i) => (
                          <motion.div
                            key={i}
                            className="flex items-center text-xs text-gray-300"
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.05 }}
                          >
                            <Check className="h-3 w-3 text-green-400 mr-2 flex-shrink-0" />
                            <span>{feat}</span>
                          </motion.div>
                        ))}
                      </div>
                      

                    </div>
                  </motion.div>
                  
                  {/* Indicador de expansión */}
                  <motion.div 
                    className="absolute bottom-4 right-4 bg-gray-700/80 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    animate={{ rotate: isExpanded ? 180 : 0 }}
                  >
                    <ChevronRight className="h-4 w-4 text-purple-400" />
                  </motion.div>
                  
                  {/* Overlay con patrón sutil */}
                  <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMiI+PGNpcmNsZSBjeD0iMyIgY3k9IjMiIHI9IjMiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                </motion.div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </motion.div>
      
      {/* Contador de características */}
      <motion.div 
        className="text-center mt-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        viewport={{ once: true }}
      >
        <div className="inline-flex items-center bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-full px-6 py-3">
          <Star className="h-5 w-5 text-purple-400 mr-2" />
          <span className="text-gray-300">
            Mostrando <span className="font-bold text-purple-400">{features.length}</span> características
          </span>
        </div>
      </motion.div>
    </div>
  );
}

export default FeatureCards;