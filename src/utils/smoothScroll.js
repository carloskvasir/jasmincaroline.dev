/**
 * Função para scroll suave com offset para compensar navbar fixo
 * @param {string} targetId - ID do elemento de destino (sem #)
 * @param {number} offset - Offset em pixels (padrão: 100)
 */
export const smoothScrollToElement = (targetId, offset = 100) => {
  const targetElement = document.getElementById(targetId);
  
  if (!targetElement) {
    console.warn(`Elemento com ID "${targetId}" não encontrado`);
    return;
  }

  const elementPosition = targetElement.getBoundingClientRect().top;
  const offsetPosition = elementPosition + window.pageYOffset - offset;

  // Usar requestAnimationFrame para scroll suave personalizado se o navegador não suportar scroll-behavior
  if (!CSS.supports('scroll-behavior', 'smooth')) {
    const startPosition = window.pageYOffset;
    const distance = offsetPosition - startPosition;
    const duration = 800; // 800ms para a animação
    let start = null;

    const step = (timestamp) => {
      if (!start) start = timestamp;
      const progress = timestamp - start;
      const percentage = Math.min(progress / duration, 1);
      
      // Função de easing para scroll mais suave
      const easeInOutCubic = percentage => 
        percentage < 0.5 
          ? 4 * percentage * percentage * percentage 
          : (percentage - 1) * (2 * percentage - 2) * (2 * percentage - 2) + 1;

      window.scrollTo(0, startPosition + distance * easeInOutCubic(percentage));

      if (progress < duration) {
        window.requestAnimationFrame(step);
      }
    };

    window.requestAnimationFrame(step);
  } else {
    // Usar scroll nativo se suportado
    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }
};

/**
 * Configurar links de navegação para usar scroll suave
 */
export const setupSmoothScrollLinks = () => {
  const navLinks = document.querySelectorAll('a[href^="#"]');
  
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      
      const targetId = link.getAttribute('href').substring(1);
      smoothScrollToElement(targetId);
      
      // Atualizar URL sem recarregar a página
      if (history.pushState) {
        history.pushState(null, null, `#${targetId}`);
      }
    });
  });
};

/**
 * Verificar se há hash na URL e fazer scroll para a seção correspondente
 */
export const handleInitialHash = () => {
  // Aguardar um pouco para garantir que o DOM esteja carregado
  setTimeout(() => {
    const hash = window.location.hash;
    if (hash && hash.length > 1) {
      const targetId = hash.substring(1);
      smoothScrollToElement(targetId);
    }
  }, 100);
};
